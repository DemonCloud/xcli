const fs = require('fs');
const path = require('path');
const util = require('util');
const fse = require('fs-extra');
const { prompt } = require('enquirer');
const struct = require('ax-struct-js');
const paths = require('../../core/utils/paths');
const download = require('download-git-repo');
const { error, warn, info, loading } = require('../../core/utils/std');
const defaultNewAbcJSON = require('../../config/defaultNewAbcJSON');
const defaultNewAbcxJSON = require('../../config/defaultNewAbcxJSON');

const keys = struct.keys();
const merge = struct.merge();

const newCommand = async function(projectFolder){
  const fsreaddir = util.promisify(fs.readdir);
  const fswriteFile = util.promisify(fs.writeFile);
  const projectPath = path.resolve(paths.currentPath, projectFolder || "");
  const abcJSONPath = path.resolve(projectPath, "abc.json");
  const abcxJSONPath = path.resolve(projectPath, "abcx.json");

  // new Project abc.json
  // or new XCLI Plugin with abcx.json
  const typesMap = {
    "[XCLI] new Project" : "project",
    "[XCLI] new XCLI Plugin [development]" : "plugin"
  };

  const { typeChoice } = await prompt({
    type: "select",
    name: "typeChoice",
    message: "[XCLI] [new] select init type project",
    choices: keys(typesMap)
  });

  const type = typesMap[typeChoice];

  // new Project
  if(type === "project"){
    // if exist abc.json
    if(fs.existsSync(abcJSONPath))
      return warn('abc.json already exist in current project folder '+projectPath.bold);

    // input project name
    const { projectName } = await prompt({
      type: "input",
      name: "projectName",
      required: true,
      message: "[XCLI] [new] project name",
      initial: (projectFolder||"").split("/")[0],
    });

    const choicesPlugin = {};
    let builtinplugins = await fsreaddir(path.resolve(paths.cliRootPath, "builtinplugins"));
    let plugins = await fsreaddir(path.resolve(paths.cliRootPath, "plugins"));

    builtinplugins = builtinplugins.map(plugin=>{
      const name = `${"[Plugin] [BuiltIn]".bold.red} ${plugin}`;
      choicesPlugin[name] = plugin;
      return name;
    });

    plugins = plugins.map(plugin=>{
      const name = `${"[Plugin]".bold.yellow} ${plugin}`;
      choicesPlugin[name] = plugin;
      return name;
    });

    // input plugin for use
    let { pluginType } = await prompt({
      type: "autocomplete",
      name: "pluginType",
      message: "[XCLI] [new] project use plugin:type in xcli",
      limit: 10,
      choices: ["NO-SELECT"].concat(keys(choicesPlugin))
    });
    pluginType = choicesPlugin[pluginType];

    if(pluginType === "NO-SELECT"){
      const { customPluginType } = await prompt({
        type: "input",
        name: "customPluginType",
        required: true,
        message: "[XCLI] [new] input project use custom plugin:type",
      });
      pluginType = customPluginType;
    }

    // input plugin package manager
    const { projectPackageManager } = await prompt({
      type: "autocomplete",
      name: "projectPackageManager",
      required: true,
      message: "[XCLI] [new] project package manager",
      choices: ["npm", "yarn"]
    });

    // create abcJSON
    const abcJSON = merge({
      name: projectName,
      type: pluginType,
      package: projectPackageManager
    }, defaultNewAbcJSON);

    await fse.ensureDir(projectPath);

    await fswriteFile(abcJSONPath, JSON.stringify(abcJSON, null, 2));

    return info("init project abc.json completed");

  // create new plugin
  }else if(type === "plugin"){
    // if exist abc.json
    if(fs.existsSync(abcxJSONPath))
      return warn('abcx.json already exist in current project folder '+projectPath.bold);

    // input plugin name
    const { pluginName } = await prompt({
      type: "input",
      name: "pluginName",
      required: true,
      message: "[XCLI] [new] plugin name (suggest: [name]-xcli-plugin)",
      initial: (projectFolder||"").split("/")[0],
    });

    // input plugin package manager
    const { pluginPackageManager } = await prompt({
      type: "autocomplete",
      name: "pluginPackageManager",
      required: true,
      message: "[XCLI] [new] plugin package manager",
      choices: ["npm", "yarn"]
    });

    const abcxJSON = merge(defaultNewAbcxJSON, {
      "plugin-name": pluginName,
      "plugin-package": pluginPackageManager
    });

    await fse.ensureDir(projectPath);

    const initLoading = loading("download plugin template from remote github");

    return download("cubec-xcli/xcli-plugin-template", projectPath, async err=>{
      if(err){
        initLoading.fail("init plugin failed with unexcepted error");
        return error(err);
      }

      await fswriteFile(abcxJSONPath, JSON.stringify(abcxJSON, null, 2));

      initLoading.succeed("init plugin completed");
    });
  }

  return error("no init type select unexpected");
};

module.exports = newCommand;
