import { Controller, Get, Post, Request, Query, Body, Param } from '@nestjs/common';
import { HcService } from './hc.service';

@Controller('hc')
// 下面写方法
export class HcController {
    constructor(private hcService: HcService) {
        // this.hcService = HcService
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
