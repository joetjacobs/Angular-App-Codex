import { SearchPipe } from './search.pipe';
import { Item } from './item.model';

describe('SearchPipe', () => {
  const pipe = new SearchPipe();
  const items: Item[] = [
    { id: 1, name: 'Apple', quantity: 1, price: 1 },
    { id: 2, name: 'Banana', quantity: 2, price: 2 }
  ];

  it('filters by query', () => {
    const result = pipe.transform(items, 'app');
    expect(result.length).toBe(1);
    expect(result[0].name).toBe('Apple');
  });
});
