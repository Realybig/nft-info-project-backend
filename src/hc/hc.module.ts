import { Module } from '@nestjs/common';
import { HcController } from './hc.controller';
import { HcService } from './hc.service';
// 引入 TypeOrm
import { TypeOrmModule } from '@nestjs/typeorm';
// 引入实体
import { Hc } from './entities/hc.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Hc])],
  controllers: [HcController],
  providers: [HcService],
})
export class HcModule {}
