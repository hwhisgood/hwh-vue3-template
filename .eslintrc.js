//eslint 全规则配置处
module.export = {
    env: {
        browser: true,
        es2021: true,  // 添加所有 ECMAScript 2021 全局变量并自动将 ecmaVersion 解析器选项设置为 12
        node: true,
        parser: 'vue-eslint-parser',
    },
    parser: 'vue-eslint-parser', //作用：指定要使用的解析器
    parserOptions: { //parserOptions是给解析器传参数
        parser: '@typescript-eslint/parser',
        ecmaVersion: "latest",  // 支持的es版本
        sourceType: 'module',  // 代模块类型，默认为script，我们设置为module
    },
    extends: [ //作用：使用预设的 lint 包， 引入了行业内最佳实践的一些规则，需要更多规则可以到rules补充
        'plugin:vue/vue3-recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    plugins: ['@typescript-eslint'], // ts语法规则补充插件
    // 规则定义值： // https://eslint.org/docs/rules/indent
    // off 或 0 - 关闭规则
    // warn 或 1 - 开启规则, 使用警告 程序不会退出
    // error 或 2 - 开启规则, 使用错误 程序退出
    rules: {
        'no-unused-vars': 'error', // 禁止出现未使用过的变量
        'indent': ['error', 4, {  // 缩进使用 4 个空格，并且 switch 语句中的 Case 需要缩进
            'SwitchCase': 1,
            'flatTernaryExpressions': true
        }],
        // 只有一个参数时，箭头函数体可以省略圆括号
        // https://eslint.org/docs/rules/arrow-parens
        'arrow-parens': 'off',
    }
}