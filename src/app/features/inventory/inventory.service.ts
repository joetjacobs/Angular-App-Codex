import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Item } from './item.model';

@Injectable({ providedIn: 'root' })
export class InventoryService {
  private itemsSubject = new BehaviorSubject<Item[]>([]);
  items$ = this.itemsSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadItems();
  }

  private loadItems(): void {
    this.http.get<Item[]>('assets/data/inventory.json')
      .subscribe(data => this.itemsSubject.next(data));
  }

  getItem(id: number): Observable<Item | undefined> {
    return this.items$.pipe(map(items => items.find(i => i.id === id)));
  }

  addItem(item: Item): void {
    const items = this.itemsSubject.getValue();
    this.itemsSubject.next([...items, item]);
  }

  updateItem(updated: Item): void {
    const items = this.itemsSubject.getValue().map(item => item.id === updated.id ? updated : item);
    this.itemsSubject.next(items);
  }

  deleteItem(id: number): void {
    const items = this.itemsSubject.getValue().filter(item => item.id !== id);
    this.itemsSubject.next(items);
  }
}
