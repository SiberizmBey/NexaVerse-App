import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.nexabag.verse',
  appName: 'NexaVerse',
  webDir: 'www',
  server: {
    url: 'https://forum.nexabag.xyz', // Forum adresin
    cleartext: true
  }
};

export default config;