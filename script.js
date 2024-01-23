let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    displayBooks();
}

function displayBooks() {
    const libraryContainer = document.getElementById('library-container');
    libraryContainer.innerHTML = ''; // Clear the container before adding books
    myLibrary.forEach((book, index) => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');
        bookCard.innerHTML = `
            <h2>${book.title}</h2>
            <p>Author: ${book.author}</p>
            <p>Pages: ${book.pages}</p>
            <p>Read: ${book.read ? 'Yes' : 'No'}</p>
            <button onclick="removeBook(${index})">Remove</button>
            <button onclick="toggleReadStatus(${index})">Toggle Read Status</button>
        `;
        bookCard.dataset.index = index;
        libraryContainer.appendChild(bookCard);
    });
}

function removeBook(index) {
    myLibrary.splice(index, 1);
    displayBooks();
}

function toggleReadStatus(index) {
    myLibrary[index].read = !myLibrary[index].read;
    displayBooks();
}

document.getElementById('new-book-btn').addEventListener('click', () => {
    document.getElementById('new-book-dialog').showModal();
});

document.getElementById('new-book-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const title = this.title.value;
    const author = this.author.value;
    const pages = this.pages.value;
    const read = this.read.checked;
    addBookToLibrary(title, author, pages, read);
    this.reset();
    document.getElementById('new-book-dialog').close();
});

// Manually adding books for testing purposes
addBookToLibrary('Harry Potter', 'J.K. Rowling', 500, true);
addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 310, false);
