import { Route } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

export const appRoutes: Route[] = [
  // {
  //   path: '',
  //   component: NxWelcomeComponent,
  //   pathMatch: 'full',
  // },
    {
        path: 'products',
        loadComponent: () =>
          import('@container-app/product-list').then((m) => m.ProductListComponent),
      },
      
      {
        path: 'orders',
        loadComponent: () =>
          import('@container-app/orders').then((m) => m.OrdersComponent),
      },
];
