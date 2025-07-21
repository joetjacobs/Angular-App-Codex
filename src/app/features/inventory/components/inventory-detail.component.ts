import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { InventoryService } from '../inventory.service';
import { Item } from '../item.model';

@Component({
  selector: 'app-inventory-detail',
  templateUrl: './inventory-detail.component.html',
  styleUrls: ['./inventory-detail.component.scss']
})
export class InventoryDetailComponent implements OnInit {
  form = this.fb.nonNullable.group({
    id: [0],
    name: ['', Validators.required],
    quantity: [0, Validators.required],
    price: [0, Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private inventoryService: InventoryService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.inventoryService.getItem(id).subscribe(item => {
        if (item) this.form.patchValue(item);
      });
    }
  }

  save(): void {
    const item: Item = this.form.getRawValue();
    if (item.id) {
      this.inventoryService.updateItem(item);
    } else {
      item.id = Date.now();
      this.inventoryService.addItem(item);
    }
    this.router.navigate(['/inventory']);
  }
}
