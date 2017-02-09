import { LoopBackConfig } from './lib/serversdk';

export class PlatformServerSDKConfig extends LoopBackConfig {

    public static save():void {
     
        PlatformServerSDKConfig.setApiVersion('api');
        PlatformServerSDKConfig.setBaseURL('https://ubuntu-nvm-mdizzle9d9.c9users.io');
        PlatformServerSDKConfig.setDebugMode(true);
        
    }
    
}
