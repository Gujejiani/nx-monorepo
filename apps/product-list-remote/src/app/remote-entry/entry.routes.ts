import { Route } from '@angular/router';

export const remoteRoutes: Route[] = [
    {
    path: '',
    loadComponent: () =>
      import('@host-app/product-list').then((m) => m.ProductListComponent),
  },
  // { path: '', component: RemoteEntryComponent },
];
