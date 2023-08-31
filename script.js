const tableBody = document.querySelector('tbody');

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
    this.info = function() {
        return `${title} by ${author}, ${pages} pages, ${read}`;
    }
}

function addBookToLibrary() {
    
}

function displayBooks {
    for (const books in myLibrary) {
        const newRow = document.createElement('tr');
        newRow.createElement('td').textContent(this.title).appendCH;

        
    }
}