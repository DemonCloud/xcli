module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true
  },
  //parser: 'babel-eslint',
  plugins: ['react'],
  extends: ['eslint:recommended', 'google', 'plugin:react/recommended'],
  settings: {
    react: {
      createClass: 'createReactClass',
      pragma: 'React',
      version: 'latest',
    },
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2017,
    sourceType: 'module',
  },
  rules: {
    'object-curly-spacing': 'off',
    'accessor-pairs': 'error',
    'array-bracket-newline': 'off',
    'array-bracket-spacing': 'off',
    'array-callback-return': 'error',
    'array-element-newline': 'off',
    'arrow-body-style': 'error',
    'arrow-parens': 'off',
    'arrow-spacing': 'off',
    'block-scoped-var': 'error',
    'block-spacing': ['error', 'always'],
    'brace-style': 'off',
    'callback-return': 'error',
    camelcase: 'off',
    'capitalized-comments': 'off',
    'class-methods-use-this': 'error',
    'comma-dangle': 'off',
    'comma-spacing': 'off',
    'comma-style': ['error', 'last'],
    complexity: 'error',
    'computed-property-spacing': 'error',
    'consistent-return': 'off',
    'consistent-this': 'off',
    curly: 'off',
    'default-case': 'error',
    'dot-location': 'error',
    'dot-notation': 'error',
    'eol-last': 'error',
    eqeqeq: 'off',
    'for-direction': 'error',
    'func-call-spacing': 'off',
    'func-name-matching': 'error',
    'func-names': ['error', 'never'],
    'func-style': ['off', 'expression'],
    'generator-star-spacing': 'error',
    'getter-return': 'error',
    'global-require': 'off',
    'guard-for-in': 'off',
    'handle-callback-err': 'error',
    'id-blacklist': 'error',
    'id-length': 'off',
    'id-match': 'error',
    indent: 'off',
    'indent-legacy': 'off',
    'init-declarations': 'off',
    'jsx-quotes': 'error',
    'key-spacing': 'off',
    'keyword-spacing': 'off',
    'line-comment-position': 'off',
    'linebreak-style': 'off',
    'lines-around-comment': 'error',
    'lines-around-directive': 'error',
    'max-depth': 'error',
    'max-len': 'off',
    'max-nested-callbacks': 'error',
    'max-params': 'off',
    'max-statements-per-line': 'off',
    'multiline-ternary': 'off',
    'new-cap': 'off',
    'new-parens': 'error',
    'newline-after-var': 'off',
    'newline-before-return': 'off',
    'newline-per-chained-call': 'off',
    'no-alert': 'off',
    'no-array-constructor': 'error',
    'no-await-in-loop': 'error',
    'no-bitwise': 'off',
    'no-buffer-constructor': 'error',
    'no-caller': 'error',
    'no-catch-shadow': 'error',
    'no-confusing-arrow': 'error',
    'no-continue': 'off',
    'no-console': 'warn',
    'no-div-regex': 'error',
    'no-duplicate-imports': 'error',
    'no-else-return': 'error',
    'no-empty-function': 'off',
    'no-eq-null': 'off',
    'no-eval': 'off',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-extra-parens': 'off',
    'no-floating-decimal': 'error',
    'no-implicit-globals': 'error',
    'no-implied-eval': 'error',
    'no-inline-comments': 'off',
    'no-iterator': 'error',
    'no-label-var': 'error',
    'no-labels': 'error',
    'no-lone-blocks': 'error',
    'no-lonely-if': 'off',
    'no-loop-func': 'error',
    'no-magic-numbers': 'off',
    'no-mixed-operators': 'off',
    'no-mixed-requires': 'error',
    'no-multi-assign': 'off',
    'no-multi-spaces': 'off',
    'no-multi-str': 'error',
    'no-multiple-empty-lines': 'error',
    'no-native-reassign': 'error',
    'no-negated-condition': 'off',
    'no-negated-in-lhs': 'error',
    'no-nested-ternary': 'off',
    'no-new': 'off',
    'no-new-func': 'off',
    'no-new-object': 'error',
    'no-new-require': 'error',
    'no-new-wrappers': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': 'off',
    'no-path-concat': 'error',
    'no-plusplus': 'off',
    'no-process-exit': 'error',
    'no-proto': 'off',
    'no-prototype-builtins': 'error',
    'no-restricted-globals': 'error',
    'no-restricted-imports': 'error',
    'no-restricted-modules': 'error',
    'no-restricted-properties': 'error',
    'no-restricted-syntax': 'error',
    'no-return-assign': 'off',
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'off',
    'no-shadow': 'off',
    'no-shadow-restricted-names': 'error',
    'no-spaced-func': 'off',
    'no-sync': 'error',
    'no-tabs': 'off',
    'no-template-curly-in-string': 'error',
    'no-ternary': 'off',
    'no-throw-literal': 'error',
    'no-trailing-spaces': 'off',
    'no-undef-init': 'error',
    'no-undefined': 'error',
    'no-underscore-dangle': 'off',
    'no-unmodified-loop-condition': 'error',
    'no-unneeded-ternary': 'error',
    'no-unused-expressions': 'error',
    'no-use-before-define': 'off',
    'no-useless-call': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-concat': 'error',
    'no-useless-constructor': 'error',
    'no-useless-rename': 'error',
    'no-useless-return': 'error',
    'no-useless-escape': 'off',
    'no-var': 'off',
    'no-void': 'off',
    'no-invalid-this': 'off',
    'no-warning-comments': 'error',
    'no-whitespace-before-property': 'error',
    'no-with': 'error',
    'nonblock-statement-body-position': ['error', 'any'],
    'object-curly-newline': 'off',
    'object-property-newline': [
      'error',
      {
        allowMultiplePropertiesPerLine: true,
      },
    ],
    'object-shorthand': 'off',
    'one-var': 'off',
    'one-var-declaration-per-line': 'off',
    'operator-assignment': 'error',
    'operator-linebreak': ['off', 'after'],
    'padded-blocks': 'off',
    'padding-line-between-statements': 'error',
    'prefer-arrow-callback': 'off',
    'prefer-const': 'off',
    'prefer-destructuring': 'off',
    'prefer-numeric-literals': 'error',
    'prefer-promise-reject-errors': 'error',
    'prefer-reflect': 'off',
    'prefer-rest-params': 'off',
    'prefer-spread': 'off',
    'prefer-template': 'off',
    'quote-props': 'off',
    quotes: 'off',
    radix: 'off',
    'require-await': 'error',
    'require-jsdoc': 'off',
    'rest-spread-spacing': 'error',
    semi: ['error', 'always'],
    'semi-spacing': [
      'error',
      {
        after: true,
        before: false,
      },
    ],
    'semi-style': ['error', 'last'],
    'sort-imports': 'off',
    'sort-keys': 'off',
    'sort-vars': 'off',
    'space-before-blocks': 'off',
    'space-before-function-paren': 'off',
    'space-in-parens': 'off',
    'space-infix-ops': 'off',
    'space-unary-ops': 'error',
    'spaced-comment': 'off',
    'switch-colon-spacing': 'error',
    'symbol-description': 'error',
    'template-curly-spacing': 'error',
    'template-tag-spacing': 'error',
    'unicode-bom': ['error', 'never'],
    'valid-jsdoc': 'error',
    'vars-on-top': 'off',
    'wrap-regex': 'warn',
    'yield-star-spacing': 'error',
    yoda: ['error', 'never'],
  },
};
