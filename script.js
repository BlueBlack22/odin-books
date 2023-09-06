const form = document.querySelector('#book-form');
const tableBody = document.getElementById('table-body')

let myLibrary = [
    {
        title: 'The Silence of the Lambs',
        author: 'Thomas Harris',
        pages: 421,
        read: true
    },
    {
        title: 'The Shining',
        author: 'Stephen King',
        pages: 312,
        read: false
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

function displayBooks() {
    tableBody.textContent = '';

    for (let i = 0; i < myLibrary.length; i++){
        const newRow = document.createElement('tr');

        const newTitle = document.createElement('td');
        newTitle.textContent = myLibrary[i].title;
        newRow.appendChild(newTitle);

        const newAuthor = document.createElement('td');
        newAuthor.textContent = myLibrary[i].author;
        newRow.appendChild(newAuthor);

        const newPages = document.createElement('td');
        newPages.textContent = myLibrary[i].pages;
        newRow.appendChild(newPages);

        const newRead = document.createElement('td');
        if (myLibrary[i].read == true) {
            newRead.textContent = 'Read';
        } else {
            newRead.textContent = 'Not Read';
        }
        newRow.appendChild(newRead);

        const removeCell = document.createElement('td');
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'X';
        removeCell.appendChild(removeBtn);
        newRow.appendChild(removeCell);

        tableBody.appendChild(newRow);
    }
}

form.addEventListener('submit', (e) => {
    addBookToLibrary(title.value, author.value, pages.value, document.querySelector('input[name="is-read"]:checked').value);
    e.preventDefault();
});