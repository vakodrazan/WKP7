const books = [
    {
        title: "Paper town",
        author: "John Green",
        genre: "Mystery",
        pages: 305,
        status: 'read',
    },
    {
        title: "The boy in the striped pyjamas",
        author: "John Boyne",
        genre: "Historical",
        pages: 216,
        status: 'read',
    },
    {
        title: "Little woman",
        author: "Louisa May Alcott",
        genre: "Comedy",
        pages: 759,
        status: 'Not read',
    },
];

const bookArticle = document.querySelector(".bookArticle");
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
                    value="${book.status}"
                    type="checkbox"
                    >
                    <button class="delete" aria-label="Remove ${book.title}" value="${book.title}">&times;</button>
                </li>
            `
    )
    .join('');
    bookList.innerHTML = myHtml;
};

// let item = [];

// const handleSubmitBtn = e => {
//     e.preventDefault();
//     const name = event.currentTarget.item.value;
//     if (!name) return;
//     const item = {
//         name,
//         complete: false,
//     };
//     // push ito our state
//     items.push(item);
//     console.info(`There are now ${items.length} in your state`);
//     e.target.reset();
//     bookList.dispatchEvent(new CustomEvent('itemsUpdate'));
// }

// form.addEventListener('submit', handleSubmitBtn);

const handleDeleteBook = e => {
    if (e.target.classList.contains("delete")) {
        const deleteList = e.target;
        deleteList.closest('.book-item').remove();
    }
}

document.addEventListener('click', handleDeleteBook);

onjaBook();