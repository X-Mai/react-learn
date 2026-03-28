const path = require('path');

module.exports = function override(config) {
  // 确保 React Compiler 插件正确配置
  config.resolve.alias = {
    ...config.resolve.alias,
    'react/jsx-runtime': require.resolve('react/jsx-runtime'),
  };

  config.optimization = {
    ...config.optimization,
    // 确保 React 运行时被正确包含
  };

  return config;
};
