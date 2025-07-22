import { Component, OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { InventoryService } from '../inventory/inventory.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  chartConfig: ChartConfiguration<'bar'> = {
    type: 'bar',
    data: {
      labels: [],
      datasets: [
        { data: [], label: 'Quantity' }
      ]
    }
  };

  constructor(private inventoryService: InventoryService) {}

  ngOnInit(): void {
    this.inventoryService.items$.subscribe(items => {
      this.chartConfig.data.labels = items.map(i => i.name);
      this.chartConfig.data.datasets[0].data = items.map(i => i.quantity);
    });
  }
}
