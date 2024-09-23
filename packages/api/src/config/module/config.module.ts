import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GlobalConfigService } from 'src/config/module/config.service';

@Module({
  imports: [ConfigModule],
  providers: [GlobalConfigService],
})
export class GlobalConfigModule {}
