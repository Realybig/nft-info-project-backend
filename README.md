<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## 项目描述
使用 Nest 编写的数藏说明书后端 Demo


## 如何创建项目模块

使用如下命令会自动在 src 下创建对应目录及 module 和 controller 文件

```bash
# 创建 xxx 模块
nest g module xxx

# 创建 xxx controller
# --no-spec 不生成测试文件
nest g controller xxx --no-spec

# 创建 xxx 服务
nest g service xxx --no-spec
```

## 如何添加业务路径

路径统一交给 `controller` 处理，所以路径添加也在 `controller` 中，如：

```js
// 根路径为 hc
@Controller('hc')
// 下面写方法
export class HcController {
    // 业务路径 list
    @Get('list')
    getList():any {
        return this.hcService.getItemList()
    }
}
```

## 如何加入项目公共路径

实际开发中会在域名后，模块前加入公共路径作为业务识别，如：`www.xxx.com/api/xxx`，这里只需在 `main.ts` 文件中的 `await app.listen(3000)` 代码上一行加入下面代码即可。

```js
app.setGlobalPrefix('api')
```

## GET/POST 请求

`get` 与 `post` 请求需要在 `controller` 中引入对应的模块，获取参数可以使用 `Request` 模块，也可以对应 `get` 使用 `Query` 模块，`post` 使用 `Body` 模块来获取参数，并且对应使用 `@Query()` 装饰器和 `@Body()` 装饰器

在 `get` 请求中 `query` 返回的是字符串，因此 `id` 一类的需要使用 `number` 类型的数据需要用 `parseInt` 方法转换

如果是动态路由需要使用 `Request` 中的 `params` 来获取路由参数，或者使用 `Param` 模块，直接使用 `params` 来获取路由参数

```js
import { Controller, Get, Post, Request, Query, Body } from '@nestjs/common';

@Post('additem')
addItem(@Body() body): any {
    console.log(body)
}

@Get('getItemDetail')
getItemDetail(@Query() query): any {
    let id:number = parseInt(query.id)
}

// 动态路由方式
@Get('getItemDetail/:id/:name')
getItemDetail(@Param() params): any {
    let id: number = parseInt(params.id)
    return this.hcService.getItemDetail(id)
}
```

## 使用 RESTClient 测试请求

在 src 目录下新建文件夹 RESTClient 在目录下新建一个 http 文件，命名为 demo.http

基本使用方法

```bash
# get 请求方法
GET http://localhost:3000/xxx HTTP/1.1
# 带有参数
?id=1

# POST 请求方法
POST http://localhost:3000/xxx
# 请求协议
application/type=json
# 请求参数
{
  "id": 1,
  "name": "柒飝龍"
}
```

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
