module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: ['airbnb', 'prettier', 'prettier/react'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parser: 'babel-eslint',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: ['react', 'prettier', 'react-hooks'],
    excludedFiles: '*.test.js',
    rules: {
        'prettier/prettier': 'error',
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
        'react/jsx-props-no-spreading': 'off',
        'import/prefer-default-export': 'off',
        'jsx-a11y/control-has-associated-label': 'off',
        'no-console': ['error', { allow: ['error'] }],
        'no-param-reassign': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
    },
    settings: {
        'import/extensions': ['.js', ' .jsx'],
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx'],
            },
        },
    },
};
