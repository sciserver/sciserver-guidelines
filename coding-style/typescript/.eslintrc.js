
// inspired by https://github.com/iamturns/create-exposed-app/blob/master/.eslintrc.js

module.exports = {
  plugins: [
    '@typescript-eslint',
    'eslint-comments',
    'jest',
    'promise',
    'unicorn'
  ],
  extends: [
    'airbnb-typescript',
    'plugin:@typescript-eslint/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:promise/recommended',
    'plugin:unicorn/recommended',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint'
  ],
  parserOptions: { project: './tsconfig.json' },
  env: {
    node: true,
    browser: true
    // Carryover from old webapp that is causing problems after migration, project does not currently use Jest so commented for now
    // jest: true,
  },
  rules: {
    // Too restrictive, writing ugly code to defend against a very unlikely scenario: https://eslint.org/docs/rules/no-prototype-builtins
    'no-prototype-builtins': 'off',
    // https://basarat.gitbooks.io/typescript/docs/tips/defaultIsBad.html
    'import/prefer-default-export': 'off',
    'import/no-default-export': 'error',
    // Too restrictive: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
    'react/destructuring-assignment': 'off',
    // No jsx extension: https://github.com/facebook/create-react-app/issues/87#issuecomment-234627904
    'react/jsx-filename-extension': 'off',
    // Makes no sense to allow type inferrence for expression parameters, but require typing the response
    /* '@typescript-eslint/explicit-function-return-type': [
      'error',
      { allowExpressions: true, allowTypedFunctionExpressions: true },
    ], */
    // Use function hoisting to improve code readability
    'no-use-before-define': 'off', // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md
    '@typescript-eslint/no-use-before-define': [
      'error',
      { functions: false, classes: true, variables: true, typedefs: true }
    ],
    // Common abbreviations are known and readable
    'unicorn/prevent-abbreviations': 'off',

    // Nextjs apps don't require the React import on TSX files
    'react/react-in-jsx-scope': 'off',

    // Mustr specific, needs reviewing
    'unicorn/filename-case': 'off',
    'max-classes-per-file': 'off',
    'unicorn/no-null': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    'no-param-reassign': 'off',
    // 'no-restricted-syntax': 'off',
    'unicorn/explicit-length-check': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
    'unicorn/no-reduce': 'off',
    'no-new': 'off',
    'react/prop-types': 'off',
    'react/state-in-constructor': 'off',
    'react/no-unused-state': 'off',
    'react/no-unescaped-entities': 'off',
    'unicorn/no-useless-undefined': 'off',
    'unicorn/no-fn-reference-in-iterator': 'off',

    // TO REVIEW!
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'consistent-return': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'class-methods-use-this': 'off',

    // STYLE
    indent: ['warn', 2],
    strict: ['warn'],
    quotes: ['warn', 'single', { allowTemplateLiterals: true }],
    'jsx-quotes': ['error', 'prefer-double'],
    'quote-props': ['warn', 'as-needed'],
    semi: ['warn', 'always'],
    'no-empty': ['warn', { allowEmptyCatch: true }],
    'generator-star-spacing': ['warn', { before: false, after: true }],
    'keyword-spacing': ['warn', { before: true, after: true }],
    'brace-style': ['warn', 'stroustrup'],
    curly: ['warn', 'all'],
    'array-bracket-spacing': ['warn', 'never'],
    'object-curly-spacing': ['warn', 'always'],
    'object-curly-newline': ['warn', { multiline: true }],
    'space-in-parens': ['warn', 'never'],
    '@typescript-eslint/lines-between-class-members': [
      'warn',
      'always',
      { exceptAfterSingleLine: true }
    ],
    'space-before-function-paren': ['warn', 'always'],
    'comma-dangle': ['warn', 'never'],
    // 'max-len': ['warn', { 'code': 100, 'tabWidth': 2, 'ignoreComments': true }],
    'new-cap': [
      'warn',
      { capIsNewExceptions: ['Attachment'], newIsCapExceptions: ['model'] }
    ],
    'no-restricted-syntax': [
      'error',
      'DebuggerStatement',
      'LabeledStatement',
      'WithStatement'
    ],

    // Useful for some lines with too many rules and really no alternatives (use-what-changed)
    'unicorn/no-abusive-eslint-disable': 'off',
    'eslint-comments/no-unlimited-disable': 'off'
  }
};
