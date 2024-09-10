import { Global, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import GlobalConfigModule from 'src/config/module/config.module';
import DatabaseModule from 'src/database/database.module';
import AppFeatureModule from '@featureModules/app.feature.module';

@Global()
@Module({
  imports: [GlobalConfigModule, DatabaseModule, AppFeatureModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
