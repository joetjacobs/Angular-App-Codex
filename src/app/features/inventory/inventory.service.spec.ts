import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { InventoryService } from './inventory.service';
import { Item } from './item.model';

describe('InventoryService', () => {
  let service: InventoryService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });

    service = TestBed.inject(InventoryService);
    http = TestBed.inject(HttpTestingController);
  });

  it('should load items', () => {
    const mockItems: Item[] = [{ id: 1, name: 'Test', quantity: 1, price: 2 }];

    const req = http.expectOne('assets/data/inventory.json');
    req.flush(mockItems);

    service.items$.subscribe(items => {
      expect(items.length).toBe(1);
      expect(items[0].name).toBe('Test');
    });
  });
});
