// 严格的ESLint配置 - 用于开发时严格检查
module.exports = {
  extends: ['react-app'],
  rules: {
    // 强制react-hooks依赖检查为错误级别
    'react-hooks/exhaustive-deps': 'error',
    // 其他可能需要严格检查的规则
    'no-unused-vars': 'warn',
    'no-console': 'warn',
  },
  overrides: [
    {
      files: ['**/*.js', '**/*.jsx'],
      rules: {
        // 在JS/JSX文件中启用更严格的规则
        'react-hooks/exhaustive-deps': 'error',
      },
    },
  ],
};