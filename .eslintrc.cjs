module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true
    },
    extends: ['plugin:react/recommended', 'plugin:json/recommended', 'airbnb', 'stylelint', 'prettier'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'react-hooks',
        'unused-imports',
        'import',
        'babun4ek-fsd-plugin',
        '@stylistic/js',
    ],
    ignorePatterns: ['**/*.scss', '**/*.css'],
    rules: {
        'react/jsx-filename-extension': [
            2,
            {
                extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
            }
        ],
        'no-console': 'warn',
        'n/no-missing-require': 'off',
        'sort-imports': 'off',
        'n/no-missing-import': 'off',
        'react/jsx-indent': [2, 4],
        'import/no-unresolved': 'off',
        quotes: [2, 'single'],
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'off',
        indent: [2, 4],
        '@stylistic/js/semi': 1,
        'n/prefer-global/process': 'off',
        'consistent-return': 'off',
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-indent-props': [2, 4],
        'react/jsx-props-no-spreading': 'warn',
        'react/function-component-definition': 'off',
        'no-shadow': 'off',
        'import/extensions': 'off',
        'unused-imports/no-unused-imports': 'error',
        'import/no-extraneous-dependencies': 'off',
        'no-underscore-dangle': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
        'no-param-reassign': 'off',
        'no-undef': 'off',
        'react/no-array-index-key': 'off',
        'import/order': [
            'error',
            {
                groups: [
                    'external',
                    'builtin',
                    'internal',
                    'parent',
                    'sibling',
                    'object',
                    'type',
                    'index'
                ],
                pathGroups: [
                    {
                        pattern: '@/**',
                        group: 'builtin'
                    },
                    {
                        pattern: '@**',
                        group: 'external',
                        position: 'after'
                    }
                ],
                pathGroupsExcludedImportTypes: ['builtin'],
                'newlines-between': 'always',
                alphabetize: {
                    order: 'asc',
                    caseInsensitive: true
                }
            }
        ],
        'babun4ek-fsd-plugin/path-checker': ['error', { alias: '@' }],
        'babun4ek-fsd-plugin/public-api-imports': [
            'error',
            {
                alias: '@'
            }
        ],
        'babun4ek-fsd-plugin/layer-imports-checker': [
            'error',
            {
                alias: '@',
                ignoreImportsPatters: ['**/StoreProvider']
            }
        ]
    },
    globals: {
        __IS_DEV__: true,
        __API__: true
    },
};
