import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { InventoryDetailComponent } from './inventory-detail.component';
import { InventoryService } from '../inventory.service';

class MockInventoryService {
  items$ = of([]);
  getItem() { return of(undefined); }
  addItem() {}
  updateItem() {}
}

describe('InventoryDetailComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [InventoryDetailComponent],
      providers: [
        FormBuilder,
        { provide: InventoryService, useClass: MockInventoryService },
        { provide: ActivatedRoute, useValue: { snapshot: { paramMap: new Map() } } }
      ]
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(InventoryDetailComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
