import { SharedUiComponent } from '@container-app/shared-ui';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-orders',
  standalone: true,
  imports: [CommonModule, SharedUiComponent],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css',
})
export class OrdersComponent {}
