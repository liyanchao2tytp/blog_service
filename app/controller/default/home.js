/*
 * @Author: lyc
 * @Date: 2020-10-20 17:21:42
 * @LastEditors: lyc
 * @LastEditTime: 2020-11-22 11:20:48
 * @Description: file content
 */
'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this
    ctx.body = 'this is sucess'
  }

  async getAriticleList() {
    const { ctx, service } = this
    let page = ctx.params.page
    let pageSize = ctx.params.pageSize

    const results = await service.default.article.getListPage(page, pageSize)

    ctx.body = { data: results }
  }

  async getAriticleById() {
    const { service, ctx } = this
    let glueSql = ''
    let id = ctx.params.id
    id ? glueSql = `WHERE article.id = ${id}` : ''
    const result = await service.default.article.getArticleById(glueSql)

    ctx.body = { data: result }

  }

  async getTypeInfo() {
    const { ctx, app } = this
    const results = await app.mysql.select('type')
    ctx.body = { data: results }
  }

  async getList() {
    const { service, ctx } = this
    let id = ctx.params.id
    let page = ctx.params.page
    let pageSize = ctx.params.pageSize
    const results = await service.default.article.getTypeList(id, page, pageSize)
    ctx.body = {
      data: results
    }
  }

  async alterPublicState() {
    const { app, ctx } = this
    let sql = `
     
    `
  }

}

module.exports = HomeController;
