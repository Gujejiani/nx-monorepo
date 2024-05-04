import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedUiComponent } from '@host-app/shared-ui';


@Component({
  selector: 'lib-product-list',
  standalone: true,
  imports: [CommonModule, SharedUiComponent,],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {}
