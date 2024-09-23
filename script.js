const myLibrary = [];
const newBookButton = document.querySelector('.new-book-btn');

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
  displayBooks();
}

function displayBooks() {
  const booksContainer = document.querySelector('.books-container');
  booksContainer.innerHTML = ''; // Clear existing books
  myLibrary.forEach(book => {
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book');
    bookDiv.innerHTML = `
      <h2>${book.title}</h2>
      <p>${book.author}</p>
      <p>Pages: ${book.pages}</p>
      <p>Read: ${book.read ? 'Yes' : 'No'}</p>
    `;
    booksContainer.appendChild(bookDiv);
  });
}

const modal = document.getElementById('bookModal');
const closeModalBtn = document.querySelector('.close-btn');
const addBookBtn = document.querySelector('.add-book-btn');

newBookButton.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
});

addBookBtn.addEventListener('click', () => {
  const title = document.getElementById('modal-title').value;
  const author = document.getElementById('modal-author').value;
  const pages = document.getElementById('modal-pages').value;
  const read = document.getElementById('modal-read').checked;
  const newBook = new Book(title, author, pages, read);
  addBookToLibrary(newBook);
  modal.style.display = 'none';
});
