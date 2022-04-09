module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: 'tsconfig.json',
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint/eslint-plugin'],
    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'plugin:import/recommended',
        'plugin:import/typescript',
    ],
    root: true,
    env: {
        node: true,
        jest: true,
    },
    ignorePatterns: ['.eslintrc.js', 'node_modules'],
    rules: {
        'quotes': ['error', 'single'],
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/member-ordering': 'error',
        'import/order': 'error',
        'max-len': [
            'error',
            {
                code: 120,
                ignorePattern: '^import .*',
                ignoreUrls: true,
                ignoreTemplateLiterals: true,
            },
        ],
        'no-constructor-return': 'error',
    },
    overrides: [
        {
            files: ['src/**/*.ts'],
            excludedFiles: '*.spec.ts',
            rules: {
                '@typescript-eslint/explicit-function-return-type': ['error', { allowExpressions: true }],
            },
        },
    ],
};
