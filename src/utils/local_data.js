export const load_Books = () => {
  try {
    const serializedBooks = localStorage.getItem('books');
    if (serializedBooks === null) {
      return undefined;
    }
    return JSON.parse(serializedBooks);
  } catch (err) {
    console.error("Could not load books from localStorage", err);
    return undefined;
  }
};

export const save_Books = (books) => {
  try {
    const serializedBooks = JSON.stringify(books);
    localStorage.setItem('books', serializedBooks);
  } catch (err) {
    console.error("Could not save books to localStorage", err);
  }
};
