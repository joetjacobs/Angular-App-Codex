import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';

import { InventoryListComponent } from './components/inventory-list.component';
import { InventoryDetailComponent } from './components/inventory-detail.component';
import { InventoryService } from './inventory.service';
import { SearchPipe } from './search.pipe';

const routes: Routes = [
  { path: '', component: InventoryListComponent },
  { path: 'new', component: InventoryDetailComponent },
  { path: ':id', component: InventoryDetailComponent }
];

@NgModule({
  declarations: [InventoryListComponent, InventoryDetailComponent, SearchPipe],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatToolbarModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ]
})
export class InventoryModule {}
