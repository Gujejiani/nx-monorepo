import { Route } from '@angular/router';

export const appRoutes: Route[] = [
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
