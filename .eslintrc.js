module.exports = {
    extends: 'eslint:recommended',
    env: {
        es6: true,
        node: true
    },
    rules: {
        'semi': 'error',
        'quotes': ['error', 'single', {'allowTemplateLiterals': true}],
        "indent": ["error", 4],

        'max-len': ['error', {'code': 120, 'tabWidth': 4}],
        'camelcase': 'error',
        'comma-style': ['error', 'last'],
        'no-unused-vars': 'error',
        'array-bracket-spacing': ['error', 'never'],
        'eqeqeq': ['error', 'always'],
        'no-console': ['error', {allow: ['info', 'error', 'warn']}],
        'max-params': ['error', 3],
        'no-magic-numbers': 'error',
        'no-multi-spaces': ['error', {ignoreEOLComments: true}],
        'max-depth': ['error', 3],
    },
    parserOptions: {
        ecmaVersion: 2017
    }
}
