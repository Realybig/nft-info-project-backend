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
      // 是否将实体同步到数据库
      synchronize: true,
      // 是否自动加载实体
      autoLoadEntities: true,
    }),
    HcModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
