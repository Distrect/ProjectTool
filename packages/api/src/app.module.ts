import { Global, Module } from '@nestjs/common';
import GlobalConfigModule from 'src/config/module/config.module';
import DatabaseModule from 'src/database/database.module';
import AppFeatureModule from '@featureModules/app.feature.module';

@Global()
@Module({
  imports: [GlobalConfigModule, DatabaseModule, AppFeatureModule],
})
export class AppModule {}
