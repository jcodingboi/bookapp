/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./script.js":
/*!*******************!*\
  !*** ./script.js ***!
  \*******************/
/***/ (() => {

eval("var myLibrary = [];\nvar newBookButton = document.querySelector('.new-book-btn');\nfunction Book(title, author, pages, read) {\n  this.title = title;\n  this.author = author;\n  this.pages = pages;\n  this.read = read;\n}\nfunction addBookToLibrary(book) {\n  myLibrary.push(book);\n  displayBooks();\n}\nfunction displayBooks() {\n  var booksContainer = document.querySelector('.books-container');\n  booksContainer.innerHTML = ''; // Clear existing books\n  myLibrary.forEach(function (book) {\n    var bookDiv = document.createElement('div');\n    bookDiv.classList.add('book');\n    bookDiv.innerHTML = \"\\n      <h2>\".concat(book.title, \"</h2>\\n      <p>\").concat(book.author, \"</p>\\n      <p>Pages: \").concat(book.pages, \"</p>\\n      <p>Read: \").concat(book.read ? 'Yes' : 'No', \"</p>\\n    \");\n    booksContainer.appendChild(bookDiv);\n  });\n}\nvar modal = document.getElementById('bookModal');\nvar closeModalBtn = document.querySelector('.close-btn');\nvar addBookBtn = document.querySelector('.add-book-btn');\nnewBookButton.addEventListener('click', function () {\n  modal.style.display = 'block';\n});\ncloseModalBtn.addEventListener('click', function () {\n  modal.style.display = 'none';\n});\nwindow.addEventListener('click', function (event) {\n  if (event.target == modal) {\n    modal.style.display = 'none';\n  }\n});\naddBookBtn.addEventListener('click', function () {\n  var title = document.getElementById('modal-title').value;\n  var author = document.getElementById('modal-author').value;\n  var pages = document.getElementById('modal-pages').value;\n  var read = document.getElementById('modal-read').checked;\n  var newBook = new Book(title, author, pages, read);\n  addBookToLibrary(newBook);\n  modal.style.display = 'none';\n});\n\n//# sourceURL=webpack://bookapp/./script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./script.js"]();
/******/ 	
/******/ })()
;