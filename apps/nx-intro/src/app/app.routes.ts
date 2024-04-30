import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: 'products',
        loadComponent: () =>
          import('@nx-intro/product-list').then((m) => m.ProductListComponent),
      },
      {
        path: 'orders',
        loadComponent: () =>
          import('@nx-intro/orders').then((m) => m.OrdersComponent),
      },
];
