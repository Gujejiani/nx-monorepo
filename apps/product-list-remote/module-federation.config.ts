import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'product-list-remote',
  exposes: {
    './Routes': 'apps/product-list-remote/src/app/remote-entry/entry.routes.ts',
  },
};

export default config;
