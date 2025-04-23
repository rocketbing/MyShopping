module.exports = {
    env: {
      browser: true,
      es2021: true,
      node: true,
      jest: true,
    },
    /* Specify how to parse the syntax */
    parser: 'vue-eslint-parser',
    /** Syntax parsing configuration with lower priority than the parser */
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      jsxPragma: 'React',
      ecmaFeatures: {
        jsx: true,
      },
    },
    /* Extend existing rules */
    extends: [
      'eslint:recommended',
      'plugin:vue/vue3-essential',
      'plugin:prettier/recommended',
    ],
    plugins: ['vue'],
    /*
     * "off" or 0 ==> Disable the rule
     * "warn" or 1 ==> Rule is a warning (does not stop code execution)
     * "error" or 2 ==> Rule is an error (prevents code execution)
     */
    rules: {
      // eslint (https://eslint.bootcss.com/docs/rules/)
      'no-var': 'error', // Require the use of let or const instead of var
      'no-multiple-empty-lines': ['warn', { max: 1 }], // Disallow multiple empty lines
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off', // Disallow console logs in production
      'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off', // Disallow debugger statements in production
      'no-unexpected-multiline': 'error', // Disallow unexpected multiline expressions
      'no-useless-escape': 'off', // Disable the rule for unnecessary escape characters
  
      // eslint-plugin-vue (https://eslint.vuejs.org/rules/)
      'vue/multi-word-component-names': 'off', // Allow component names with single word
      'vue/script-setup-uses-vars': 'error', // Prevent unused variables from being marked as unused in <script setup>
      'vue/no-mutating-props': 'off', // Allow mutating props
      'vue/attribute-hyphenation': 'off', // Disable enforced hyphenation for custom component attributes
    },
  }
  
  
  