import Cart from '../service/Cart';
import Book from '../domain/Book';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('adding an item should increase the cart size', () => {
  const cart = new Cart();
  const book = new Book(1, 'Book Title', 'Author', 100, 10);

  cart.add(book);

  expect(cart.items.length).toBe(1);
});

test('adding multiple items should increase the cart size accordingly', () => {
  const cart = new Cart();
  const book1 = new Book(1, 'Book Title 1', 'Author', 100, 10);
  const book2 = new Book(2, 'Book Title 2', 'Author', 100, 10);

  cart.add(book1);
  cart.add(book2);

  expect(cart.items.length).toBe(2);
});