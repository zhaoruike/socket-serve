'use strict';
const fs = require('fs');
const path = require('path');
module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_zrk';

  // add your config here
  config.middleware = ["load"];

  config.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.nj': 'nunjucks',
      '.html': 'nunjucks',
    },
  };
  config.static = {
    prefix: '/public/',
    dir: path.join(appInfo.baseDir, 'app/public'),
    dynamic: true,
    preload: false,
    buffer: false,
    maxFiles: 1000,
  };

  config.httpclient = {
    // 是否开启本地 DNS 缓存，默认关闭，开启后有两个特性
    // 1. 所有的 DNS 查询都会默认优先使用缓存的，即使 DNS 查询错误也不影响应用
    // 2. 对同一个域名，在 dnsCacheLookupInterval 的间隔内（默认 10s）只会查询一次
    enableDNSCache: false,
    // 对同一个域名进行 DNS 查询的最小间隔时间
    dnsCacheLookupInterval: 10000,
    // DNS 同时缓存的最大域名数量，默认 1000
    dnsCacheMaxLength: 1000,

    request: {
      // 默认 request 超时时间
      timeout: 3000,
    },

    httpAgent: {
      // 默认开启 http KeepAlive 功能
      keepAlive: false,
      // 空闲的 KeepAlive socket 最长可以存活 4 秒
      freeSocketTimeout: 4000,
      // 当 socket 超过 30 秒都没有任何活动，就会被当作超时处理掉
      timeout: 30000,
      // 允许创建的最大 socket 数
      maxSockets: Number.MAX_SAFE_INTEGER,
      // 最大空闲 socket 数
      maxFreeSockets: 256,
    },
  };

  config.customLogger = {
    curlLogger: {
      file: path.join(appInfo.root, 'logs/curl.log'),
    },
  };

  exports.io = {
    namespace: {
      '/chat': {
        connectionMiddleware: ['connection'],
      },
    },
  }

  // config.security = {
  //   csrf: {
  //     enable: false,
  //     ignoreJSON: true
  //   },
  //   domainWhiteList: ['http://localhost:7001']
  // };

  // config.cors = {
  //   origin:'*',
  //   allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
  // };

  config.consoleLog = true;


  return config;
};
