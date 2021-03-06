/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1601697128068_9572';

  // add your middleware config here
  // config.middleware = ['adminauth'];
  config.middleware = [];


  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  config.mysql = {
    client: {
      host: 'localhost',
      port: '3306',
      user: 'root',
      password: '123456',
      database: 'react-blog',
    },
    app: true,
    agent: false
  }
  config.security = {
    // 关闭csrf校验机制
    csrf: {
      enable: false
    },
    domainWhiteList: ['*']
  }

  config.cors = {
    // origin: '*',
    credentials:true, //运行cookie跨域
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS'
  }

  return {
    ...config,
    ...userConfig,
  };
};
