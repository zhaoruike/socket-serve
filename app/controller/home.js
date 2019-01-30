'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.set({
      "Cache-Control":"max-age=1000000"
    });
    this.ctx.body = 'hi, egg';
  }
  async page() {
    await this.ctx.render('page.html');
  }
}

module.exports = HomeController;
