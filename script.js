const form = document.querySelector('#book-form');

const myLibrary = [
    {
        title: 'The Silence of the Lambs',
        author: 'Thomas Harris',
        pages: 421,
        read: true
    }
];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

/*
form.addEventListener('submit', (e) => {
    console.log('hi!');
    e.preventDefault();
});

this.info = function() {
        return `${title} by ${author}, ${pages} pages, ${read}`;
    }
*/