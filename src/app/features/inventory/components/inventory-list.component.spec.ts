import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { InventoryListComponent } from './inventory-list.component';
import { InventoryService } from '../inventory.service';

class MockInventoryService {
  items$ = of([]);
  deleteItem() {}
}

describe('InventoryListComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [InventoryListComponent],
      providers: [{ provide: InventoryService, useClass: MockInventoryService }]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(InventoryListComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
