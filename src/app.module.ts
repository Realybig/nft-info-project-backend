import { Module } from '@nestjs/common';
import { HcModule } from './hc/hc.module';

@Module({
  imports: [HcModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
