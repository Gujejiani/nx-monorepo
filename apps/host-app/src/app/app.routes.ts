import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'products',
    loadChildren: () =>
      import('product-list-remote/Routes').then((m) => m.remoteRoutes),
  },
  // {
  //   path: '',
  //   component: NxWelcomeComponent,
  // },
  // {
  //   path: '',
  //   component: NxWelcomeComponent,
  //   pathMatch: 'full',
  // },
  // {
  //   path: 'products',
  //   loadComponent: () =>
  //     import('@host-app/product-list').then((m) => m.ProductListComponent),
  // },

  {
    path: 'orders',
    loadComponent: () =>
      import('@host-app/orders').then((m) => m.OrdersComponent),
  },
];
