module.exports = {
  root: true,
  env: {
    es2021: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'import', 'unused-imports'],
  rules: {
    'max-len': ['warn', {
      code: 100,
      ignorePattern: '(^import .*|d=\'([\\s\\S]*?)\'|className=\'([\\s\\S]*?)\')',
      ignoreUrls: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreRegExpLiterals: true
    }],
    'comma-dangle': ['error', 'never'],
    semi: [2, 'always'],
    quotes: ['error', 'single'],
    'jsx-quotes': ['error', 'prefer-single'],
    'object-curly-spacing': ['error', 'always'],
    'arrow-parens': ['error', 'always'],
    'quote-props': ['error', 'as-needed'],
    indent: ['error', 2, {
      SwitchCase: 1
    }],
    'prefer-destructuring': ['off', 'never'], // disable destructuring for now
    camelcase: ['warn', {
      properties: 'always'
    }],
    'space-infix-ops': 'error',
    'no-underscore-dangle': 'off',
    // eslint-plugin-import rules
    'import/extensions': ['off', 'never'],
    // disable import extensions
    'import/order': ['error', {
      // sort imports
      groups: [
        'builtin',
        'external',
        'internal',
        ['sibling', 'parent'],
        'index',
        'object',
        'type',
        'unknown'
      ],
      'newlines-between': 'always'
    }],
    'import/first': 'warn', // require imports be placed at the top of the file
    'import/exports-last': 'warn', // require exports to be placed at the bottom of the file
    'import/prefer-default-export': 'warn',
    'no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': ['warn', {
      vars: 'all',
      varsIgnorePattern: '^_',
      args: 'after-used',
      argsIgnorePattern: '^_'
    }],
    'no-multiple-empty-lines': [2, { max: 1, maxEOF: 1 }],
    'no-console': ['warn', { allow: ['warn'] }]
  },
  settings: {
    'import/resolver': {
      // Without this, it won't consider ts files when looking for imports
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  },
  overrides: [{
    files: ['*.ts', '*.mts', '*.cts', '*.tsx'],
    rules: {
      'no-undef': 'off'
    }
  }]
};