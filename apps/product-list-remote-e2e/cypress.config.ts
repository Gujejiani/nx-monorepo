import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run product-list-remote:serve:development',
        production: 'nx run product-list-remote:serve:production',
      },
      ciWebServerCommand: 'nx run product-list-remote:serve-static',
    }),
    baseUrl: 'http://localhost:4201',
  },
});
