import { Injectable } from '@nestjs/common';

@Injectable()
export class HcService {
    getItemList(): any {
        return {
            code: 0,
            data: ['鹿在朝', '大猴', '刘备'],
            msg: 'ok'
        }
    }

    addItem(): any {
        return {
            code: 200,
            data: {
                name: '鹿在朝',
                nums: '200',
                hasActivity: false,
                hasSynthetic: 0
            },
            msg: 'OK'
        }
    }

    getItemDetail(id): any {
        let req = {}
        switch (id) {
            case 1:
                req = {
                    name: '鹿在朝',
                    nums: '200',
                    hasActivity: false,
                    hasSynthetic: 0
                }
                break;
            case 2:
                req = {
                    name: '红莲业火',
                    nums: '200',
                    hasActivity: false,
                    hasSynthetic: 0
                }
                break;
            case 3:
                req = {
                    name: '刘备',
                    nums: '200',
                    hasActivity: false,
                    hasSynthetic: 0
                }
                break;
        }
        return req;
    }
}
