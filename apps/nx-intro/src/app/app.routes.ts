import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: 'products',
        loadComponent: () =>
          import('@nx-intro/product-list').then((m) => m.ProductListComponent),
      },
];
