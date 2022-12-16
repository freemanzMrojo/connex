module.exports = {
    'root': true,
    'env': {
        'node': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': { 
        'project': ['./tsconfig.json'],
        'tsconfigRootDir': __dirname
    },
    'plugins': [
        '@typescript-eslint'
    ],
    'rules': {
        '@typescript-eslint/strict-boolean-expressions': [
            2,
            {
                'allowString' : false,
                'allowNumber' : false
            }
        ]
    },
    'ignorePatterns': ['src/**/*.test.ts', 'dist/**/*']
}