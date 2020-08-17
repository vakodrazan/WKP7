const books = [
    {
        title: "Paper town",
        author: "John Green",
        genre: "Mystery",
        pages: 305,
        status: 'read',
        id: 002271313746162,
    },
    {
        title: "The boy in the striped pyjamas",
        author: "John Boyne",
        genre: "Historical",
        pages: 216,
        status: 'read',
        id: 002271313746164,
    },
    {
        title: "Little woman",
        author: "Louisa May Alcott",
        genre: "Comedy",
        pages: 759,
        status: 'Not read',
        id: 00227131374616362,
    },
];


const bookList = document.querySelector(".bookList");
const add = document.querySelector(".add");
const form = document.querySelector("form");

// Loop through each item
const onjaBook = e => {
    const myHtml = books
    .map(
        book => 
            `
                <li class="book-item">
                    <span>${book.title}</span>
                    <p>${book.author}</p>
                    <span>${book.genre}</span>
                    <span>${book.pages}</span>
                    <input ${book.status === 'read' ? 'checked' : ""}
                    value="${book.id}"
                    type="checkbox"
                    >
                    <button class="delete" aria-label="Remove ${book.title}" value="${book.id}">&times;</button>
                </li>
            `
    )
    .join('');
    bookList.innerHTML = myHtml;
};
onjaBook();

// Create a an empty array that will contain the new item 
let newBooks = [];

// Create a function for the new array
const handleSubmitBtn = e => {
    e.preventDefault();

    const form = e.currentTarget;
    const name= form.bookTitle.value;
    const author = form.bookAuthor.value;
    const genre = form.genre.value;
    const pages = form.bookPages.value;
    const status = form.status.value;

    const newBook = {
        title: name,
        author: author,
        genre: genre,
        pages: pages,
        status: status,
        id: Date.now(),
    }

    // push the new object inside the array
    newBooks.push(newBook);
    e.target.reset();

    // add the dispatch event for the new event
    bookList.dispatchEvent(new CustomEvent('newBookUpdate'));
};

// Add the new array object with the existing elements
const displayTheNewBook = e => {
    const myHtml = newBooks
    .map(
        item => 
            `
                <li class="book-item">
                    <span>${item.title}</span>
                    <p>${item.author}</p>
                    <span>${item.genre}</span>
                    <span>${item.pages}</span>
                    <input ${item.status === 'read' ? 'checked' : ""}
                    value="${item.id}"
                    type="checkbox"
                    >
                    <button class="delete" aria-label="Remove ${item.title}" value="${item.id}">&times;</button>
                </li>
            `
    )
    .join('');
    bookList.innerHTML += myHtml;
};


// convert the array into string 
const mirrorToLocalStorage = () => {
    console.log('mirrorring items to local storage');
    localStorage.setItem('newBooks', JSON.stringify(newBooks));
};

// Store the new item
const restoreFromLocalStorage = () => {
    console.log('Restoring from Ls')
    const lstNewBook = JSON.parse(localStorage.getItem('newBooks'));
    if (lstNewBook) {
        newBooks.push(...lstNewBook);
    };
    bookList.dispatchEvent(new CustomEvent('newBookUpdate'));
};


// Delete the list item when click the delete button
const handleDeleteBook = e => {
    if (e.target.classList.contains("delete")) {
        const deleteList = e.target;
        deleteList.closest('.book-item').remove();
        bookList.dispatchEvent(new CustomEvent('newBookUpdate'));
    }
}

const deleteItem = id => {
    console.log("deleting item", id);
    newBooks = newBooks.filter(newBook => newBook.id !== id);
    bookList.dispatchEvent(new CustomEvent('newBookUpdate'));
}

const markAsComplete = id => {
    console.log(id);
    const newBookRef = newBooks.find(item => item.id === id);
    newBookRef.status = !newBookRef.status;
    bookList.dispatchEvent(new CustomEvent('newBookUpdate'));
}

// Listen to the dispatch event
form.addEventListener('submit', handleSubmitBtn);
bookList.addEventListener('newBookUpdate', displayTheNewBook);
bookList.addEventListener("newBookUpdate", mirrorToLocalStorage);
bookList.addEventListener('click', handleDeleteBook);

bookList.addEventListener('click', function(e) {
    const id = parseInt(e.target.value)
    if (e.target.matches('button')) {
        deleteItem(parseInt(id));
    }
    if (e.target.matches('input[type="checkbox"]')) {
        markAsComplete(id);
    }
})


restoreFromLocalStorage();

