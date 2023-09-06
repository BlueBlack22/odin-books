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

function updateButtons() {
    const removeButtons = document.querySelectorAll('.remove-btn');
    removeButtons.forEach(function(currentBtn) {
        currentBtn.addEventListener('click', (e) => removeBookFromLibrary(currentBtn.value));
    });

    const isReadButtons = document.querySelectorAll('.is-read-btn');
    isReadButtons.forEach(function(currentBtn) {
        currentBtn.addEventListener('click', (e) => changeStatus(currentBtn.value))
    });
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

        const readCell = document.createElement('td');
        const readBtn = document.createElement('button');
        if (myLibrary[i].read == true) {
            readBtn.textContent = 'Read';
            readBtn.classList.add('btn-read');
        } else {
            readBtn.textContent = 'Not Read';
            readBtn.classList.add('btn-not-read');
        }
        readBtn.setAttribute('value', i);
        readBtn.classList.add('is-read-btn');
        readCell.appendChild(readBtn);
        newRow.appendChild(readCell);

        const removeCell = document.createElement('td');
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'X';
        removeBtn.setAttribute('value', i);
        removeBtn.classList.add('remove-btn');
        removeCell.appendChild(removeBtn);
        newRow.appendChild(removeCell);

        tableBody.appendChild(newRow);
    }
    updateButtons();
}

function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    displayBooks();
}

function removeBookFromLibrary(index) {
    myLibrary.splice(index, 1);
    displayBooks();
}

function changeStatus(index) {
    const currentStatus = myLibrary[index].read;
    currentStatus ? myLibrary[index].read = false : myLibrary[index].read = true;
    displayBooks();
}

displayBooks();

form.addEventListener('submit', (e) => {
    addBookToLibrary(title.value, author.value, pages.value, document.querySelector('input[name="is-read"]:checked').value);
    e.preventDefault();
});