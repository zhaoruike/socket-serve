'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
const testRouter = require("./router/testRouter.js")
const ioRouter = require("./router/ioRouter.js")
module.exports = app => {
  const { router, controller } = app;
  testRouter(app);
  ioRouter(app)
};
