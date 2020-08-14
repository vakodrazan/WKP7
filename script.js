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
                    <input 
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


onjaBook();