import { Controller, Get, Post, Query, Body, Param } from '@nestjs/common';
import { HcService } from './hc.service';
import openai from 'openai';
const { Configuration, OpenAIApi } = require("openai");

@Controller('api/hc')
// 下面写方法
export class HcController {
    constructor(private hcService: HcService) {
        // this.hcService = HcService
    }

    @Get('chat')
    async chat() {
        const apiKey = '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'
        const configuration = new Configuration({
            apiKey,
        });
        const openai = new OpenAIApi(configuration);
        console.log(configuration, openai)
        const completion = await openai.createCompletion({
            model: "text-davinci-002",
            prompt: "夸赞一个人很帅，隐晦一些",
        });
        console.log(completion.data.choices[0].text);
    }

    @Get('list')
    getList(): any {
        return this.hcService.getItemList()
    }

    @Post('additem')
    addItem(@Body() body): any {
        console.log(body)
        return this.hcService.addItem()
    }

    // 传统 get 请求使用 url 传参方式
    // @Get('getItemDetail')
    // getItemDetail(@Query() query): any {
    //     let id: number = parseInt(query.id)
    //     return this.hcService.getItemDetail(id)
    // }

    // 动态路由方式
    @Get('getItemDetail/:id/:name')
    getItemDetail(@Param() params): any {
        let id: number = parseInt(params.id)
        return this.hcService.getItemDetail(id)
    }
}
