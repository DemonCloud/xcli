const git = require('simple-git');
const colors = require('colors');
const fs = require('fs');
const util = require('util');
const path = require('path');
const struct = require('ax-struct-js');
const { exec } = require('child_process');
const paths = require('../../core/utils/paths');
const { info, error, loading } = require('../../core/utils/std');
const UPGRADE = require('../../dict/commandos/UPGRADE');

const has = struct.has();

const upgradeCommand = function(version){
  const xcliGit = git(paths.cliRootPath);
  const packageJSONPath = path.resolve(paths.cliRootPath, 'package.json');

  // 拉取源码
  xcliGit.pull(async function(err, upgrade){
    if(err){
      error(UPGRADE.UPGRADE_GITPULL_UNEXCEPT_ERROR);
      throw new Error(err);
    }

    if(upgrade){
      const cexec = util.promisify(exec);
      const fsreaddir = util.promisify(fs.readdir);

      if(upgrade.files.length){
        info(UPGRADE.UPGRADE_PROCESS_GITPULL_COMPLETED);

        // 有更新 xcli 的 package.json
        if(has(upgrade.files, "package.json")){
          const package_loading = loading(UPGRADE.UPGRADE_PROCESS_CORE_PACKAGE);
          await cexec(`npm install`, { cwd: paths.cliRootPath });
          package_loading.succeed(UPGRADE.UPGRADE_PROCESS_CORE_PACKAGE+" completed");
        }

        // 升级内置插件包的 package
        const builtinPluginsPaths = await fsreaddir(paths.pluginsBuiltinPath);

        if(builtinPluginsPaths.length){
          const builtinplugins_loading = loading(UPGRADE.UPGRADE_PROCESS_BUILTIN_PACKAGE);

          await Promise.all(builtinPluginsPaths.map(function(btPlugin){
            const btPluginPath = path.resolve(paths.pluginsBuiltinPath, btPlugin);
            return cexec(`npm install`, { cwd: btPluginPath });
          }));

          builtinplugins_loading.succeed(UPGRADE.UPGRADE_PROCESS_BUILTIN_PACKAGE+" completed");
        }
      }
    }

    const packageJSON = require(packageJSONPath);

    info(UPGRADE.UPGRADE_CORE_SUCCESS);

    return info(`xcli version ${("[" + packageJSON.version + "]").bold}`);
  });

  return true;
};

module.exports = upgradeCommand;
