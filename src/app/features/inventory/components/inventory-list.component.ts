import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Item } from '../item.model';
import { InventoryService } from '../inventory.service';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.scss']
})
export class InventoryListComponent {
  displayedColumns = ['id', 'name', 'quantity', 'price', 'actions'];
  items$: Observable<Item[]> = this.inventoryService.items$;
  search = '';

  constructor(private inventoryService: InventoryService, private router: Router) {}

  view(id: number): void {
    this.router.navigate(['/inventory', id]);
  }

  delete(id: number): void {
    this.inventoryService.deleteItem(id);
  }
}
