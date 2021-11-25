//UI and LS Objects
const ui = new UI();

//event elements
const form = document.querySelector('form');

//event elements
form.addEventListener('submit', addBook);

function addBook(event){
    // get form input data
    const titleInput = document.querySelector('#title');
    const authorInput = document.querySelector('#author');
    const isbnInput = document.querySelector('#isbn');

    let title = titleInput.value;
    let author = authorInput.value;
    let isbn = isbnInput.value;

    const book = new Book(title, author, isbn);

    ui.addBook(book)

    titleInput.value = '';
    authorInput.value = '';
    isbnInput.value = '';

    event.preventDefault();
}