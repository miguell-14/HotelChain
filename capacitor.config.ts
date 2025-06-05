import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.ipvc.appihm',
  appName: 'HotelChain',
  webDir: 'www',

    plugins: {
      SplashScreen: {
        launchShowDuration: 2000,
        launchAutoHide: true,
        backgroundColor: "#ffffff",
        androidSplashResourceName: "splash.png",
        iosSplashResourceName: "splash.png",
        showSpinner: true,
      }
    }
  
  
};

export default config;
