/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
    root: true,
    extends: ["plugin:vue/vue3-essential", "eslint:recommended", "@vue/eslint-config-typescript", "@vue/eslint-config-prettier"],
    parserOptions: {
        ecmaVersion: "latest",
    },
    plugins: ["prettier"],
    rules: {
        "prettier/prettier": [
            "error",
            {
                tabWidth: 4,
                semi: true,
                singleQuote: false,
                // bracketSpacing: true,
                // eslintIntegration: true,
                printWidth: 200,
            },
        ],
        "arrow-body-style": "off",
        "prefer-arrow-callback": "off",
    },
};
