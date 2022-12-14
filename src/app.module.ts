import { Module } from '@nestjs/common';
import { HcModule } from './hc/hc.module';
// 引入 typeORM 模块
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'bologer',
      password: 'weiwei10',
      database: 'nft-info',
      // 重试链接数据库间隔
      retryDelay: 500,
      // 重试次数
      retryAttempts: 10,
    }),
    HcModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
