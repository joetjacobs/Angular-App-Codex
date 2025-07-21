import { Pipe, PipeTransform } from '@angular/core';
import { Item } from './item.model';

@Pipe({ name: 'search' })
export class SearchPipe implements PipeTransform {
  transform(items: Item[], query: string): Item[] {
    if (!query) return items;
    const lower = query.toLowerCase();
    return items.filter(i => i.name.toLowerCase().includes(lower));
  }
}
