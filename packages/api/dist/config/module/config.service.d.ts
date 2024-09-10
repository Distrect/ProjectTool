import { ConfigService } from '@nestjs/config';
export default class GlobalConfigService {
    private configService;
    constructor(configService: ConfigService);
}
