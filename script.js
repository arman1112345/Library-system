const contentDiv = document.getElementById('content');
const showBooksBtn = document.getElementById('showBooks');
const addBookBtn = document.getElementById('addBookBtn');
const showUsersBtn = document.getElementById('showUsers');
const addUserBtn = document.getElementById('addUserBtn');
const showBorrowedBtn = document.getElementById('showBorrowed');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const notificationArea = document.getElementById('notification-area');

const STORAGE_KEY_BOOKS = 'library_books';
const STORAGE_KEY_USERS = 'library_users';
const STORAGE_KEY_BORROWED = 'library_borrowed';

// Load data from local storage
let books = JSON.parse(localStorage.getItem(STORAGE_KEY_BOOKS)) || [
    { id: 1, title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', isbn: '978-0618260274', genre: 'Fantasy' },
{ id: 2, title: 'Pride and Prejudice', author: 'Jane Austen', isbn: '978-0141439518', genre: 'Classic Literature' },
{ id: 3, title: 'To Kill a Mockingbird', author: 'Harper Lee', isbn: '978-0446310789', genre: 'Literary Fiction' },
{ id: 4, title: '1984', author: 'George Orwell', isbn: '978-0451524935', genre: 'Dystopian Fiction' },
{ id: 5, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', isbn: '978-0743273565', genre: 'Classic Literature' },
{ id: 6, title: 'One Hundred Years of Solitude', author: 'Gabriel García Márquez', isbn: '978-0061120084', genre: 'Magical Realism' },
{ id: 7, title: 'The Hitchhiker\'s Guide to the Galaxy', author: 'Douglas Adams', isbn: '978-0345391803', genre: 'Science Fiction Comedy' },
{ id: 8, title: 'Harry Potter and the Sorcerer\'s Stone', author: 'J.K. Rowling', isbn: '978-0590353403', genre: 'Fantasy' },
{ id: 9, title: 'The Catcher in the Rye', author: 'J.D. Salinger', isbn: '978-0316769488', genre: 'Coming-of-Age Fiction' },
{ id: 10, title: 'Brave New World', author: 'Aldous Huxley', isbn: '978-0060850524', genre: 'Dystopian Fiction' },
{ id: 11, title: 'The Alchemist', author: 'Paulo Coelho', isbn: '978-0061122415', genre: 'Philosophical Fiction' },
{ id: 12, title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', isbn: '978-0143058144', genre: 'Psychological Fiction' },
{ id: 13, title: 'Moby-Dick', author: 'Herman Melville', isbn: '978-0142437247', genre: 'Adventure Fiction' },
{ id: 14, title: 'The Odyssey', author: 'Homer', isbn: '978-0140268867', genre: 'Epic Poetry' },
{ id: 15, title: 'Jane Eyre', author: 'Charlotte Brontë', isbn: '978-0141441146', genre: 'Gothic Fiction' },
{ id: 16, title: 'Wuthering Heights', author: 'Emily Brontë', isbn: '978-0141439556', genre: 'Gothic Fiction' },
{ id: 17, title: 'Don Quixote', author: 'Miguel de Cervantes', isbn: '978-0142437230', genre: 'Satire' },
{ id: 18, title: 'The Brothers Karamazov', author: 'Fyodor Dostoevsky', isbn: '978-0374528379', genre: 'Philosophical Fiction' },
{ id: 19, title: 'War and Peace', author: 'Leo Tolstoy', isbn: '978-0143039990', genre: 'Historical Fiction' },
{ id: 20, title: 'The Divine Comedy', author: 'Dante Alighieri', isbn: '978-0142437223', genre: 'Epic Poetry' },
{ id: 21, title: 'The Iliad', author: 'Homer', isbn: '978-0140275360', genre: 'Epic Poetry' },
{ id: 22, title: 'Anna Karenina', author: 'Leo Tolstoy', isbn: '978-0143035008', genre: 'Realist Fiction' },
{ id: 23, title: 'Madame Bovary', author: 'Gustave Flaubert', isbn: '978-0143106494', genre: 'Realist Fiction' },
{ id: 24, title: 'The Adventures of Huckleberry Finn', author: 'Mark Twain', isbn: '978-0142437179', genre: 'Adventure Fiction' },
{ id: 25, title: 'Lolita', author: 'Vladimir Nabokov', isbn: '978-0679723165', genre: 'Controversial Fiction' },
{ id: 26, title: 'Hamlet', author: 'William Shakespeare', isbn: '978-0743477123', genre: 'Tragedy' },
{ id: 27, title: 'The Great Expectations', author: 'Charles Dickens', isbn: '978-0141439563', genre: 'Bildungsroman' },
{ id: 28, title: 'The Scarlet Letter', author: 'Nathaniel Hawthorne', isbn: '978-0142437261', genre: 'Historical Fiction' },
{ id: 29, title: 'The Count of Monte Cristo', author: 'Alexandre Dumas', isbn: '978-0140449266', genre: 'Adventure Fiction' },
{ id: 30, title: 'The Picture of Dorian Gray', author: 'Oscar Wilde', isbn: '978-0141439570', genre: 'Gothic Fiction' },
{ id: 31, title: 'The Old Man and the Sea', author: 'Ernest Hemingway', isbn: '978-0684801223', genre: 'Literary Fiction' },
{ id: 32, title: 'The Grapes of Wrath', author: 'John Steinbeck', isbn: '978-0143039433', genre: 'Historical Fiction' },
{ id: 33, title: 'Ulysses', author: 'James Joyce', isbn: '978-0679722762', genre: 'Modernist Fiction' },
{ id: 34, title: 'The Sound and the Fury', author: 'William Faulkner', isbn: '978-0679732242', genre: 'Southern Gothic' },
{ id: 35, title: 'Fahrenheit 451', author: 'Ray Bradbury', isbn: '978-1451673319', genre: 'Dystopian Fiction' },
{ id: 36, title: 'Heart of Darkness', author: 'Joseph Conrad', isbn: '978-0141441672', genre: 'Novella' },
{ id: 37, title: 'The Wind in the Willows', author: 'Kenneth Grahame', isbn: '978-0143039099', genre: 'Children\'s Literature' },
{ id: 38, title: 'David Copperfield', author: 'Charles Dickens', isbn: '978-0140439441', genre: 'Bildungsroman' },
{ id: 39, title: 'A Tale of Two Cities', author: 'Charles Dickens', isbn: '978-0141439600', genre: 'Historical Fiction' },
{ id: 40, title: 'The Little Prince', author: 'Antoine de Saint-Exupéry', isbn: '978-0156012195', genre: 'Children\'s Literature' },
{ id: 41, title: 'Les Misérables', author: 'Victor Hugo', isbn: '978-0143107569', genre: 'Historical Fiction' },
{ id: 42, title: 'A Passage to India', author: 'E.M. Forster', isbn: '978-0156711425', genre: 'Literary Fiction' },
{ id: 43, title: 'Middlemarch', author: 'George Eliot', isbn: '978-0141439549', genre: 'Realist Fiction' },
{ id: 44, title: 'The Canterbury Tales', author: 'Geoffrey Chaucer', isbn: '978-0140424386', genre: 'Poetry Collection' },
{ id: 45, title: 'Frankenstein', author: 'Mary Shelley', isbn: '978-0486282114', genre: 'Gothic Fiction' },
{ id: 46, title: 'Alice\'s Adventures in Wonderland', author: 'Lewis Carroll', isbn: '978-0141439761', genre: 'Children\'s Literature' },
{ id: 47, title: 'The Name of the Rose', author: 'Umberto Eco', isbn: '978-0156001311', genre: 'Historical Mystery' },
{ id: 48, title: 'For Whom the Bell Tolls', author: 'Ernest Hemingway', isbn: '978-0684803357', genre: 'War Fiction' },
{ id: 49, title: 'The Hobbit', author: 'J.R.R. Tolkien', isbn: '978-0618260300', genre: 'Fantasy' },
{ id: 50, title: 'The Trial', author: 'Franz Kafka', isbn: '978-0805209990', genre: 'Absurdist Fiction' },
{ id: 51, title: 'The Stranger', author: 'Albert Camus', isbn: '978-0679720201', genre: 'Philosophical Fiction' },
{ id: 52, title: 'Catch-22', author: 'Joseph Heller', isbn: '978-1451626650', genre: 'Satirical War Novel' },
{ id: 53, title: 'The Sun Also Rises', author: 'Ernest Hemingway', isbn: '978-0743297332', genre: 'Modernist Fiction' },
{ id: 54, title: 'Dracula', author: 'Bram Stoker', isbn: '978-0141439846', genre: 'Gothic Horror' },
{ id: 55, title: 'The Call of the Wild', author: 'Jack London', isbn: '978-0141321059', genre: 'Adventure Fiction' },
{ id: 56, title: 'Slaughterhouse-Five', author: 'Kurt Vonnegut', isbn: '978-0385333849', genre: 'Satirical War Novel' },
{ id: 57, title: 'Robinson Crusoe', author: 'Daniel Defoe', isbn: '978-0141439822', genre: 'Adventure Fiction' },
{ id: 58, title: 'The Metamorphosis', author: 'Franz Kafka', isbn: '978-0553213690', genre: 'Absurdist Fiction' },
{ id: 59, title: 'The Portrait of a Lady', author: 'Henry James', isbn: '978-0141441269', genre: 'Psychological Fiction' },
{ id: 60, title: 'Things Fall Apart', author: 'Chinua Achebe', isbn: '978-0385474542', genre: 'Historical Fiction' },
{ id: 61, title: 'One Flew Over the Cuckoo\'s Nest', author: 'Ken Kesey', isbn: '978-0143105022', genre: 'Psychological Fiction' },
{ id: 62, title: 'Beloved', author: 'Toni Morrison', isbn: '978-1400033416', genre: 'Historical Fiction' },
{ id: 63, title: 'Mrs. Dalloway', author: 'Virginia Woolf', isbn: '978-0156628709', genre: 'Modernist Fiction' },
{ id: 64, title: 'To the Lighthouse', author: 'Virginia Woolf', isbn: '978-0156907392', genre: 'Modernist Fiction' },
{ id: 65, title: 'The Color Purple', author: 'Alice Walker', isbn: '978-0156028356', genre: 'Epistolary Novel' },
{ id: 66, title: 'Gone with the Wind', author: 'Margaret Mitchell', isbn: '978-1451635621', genre: 'Historical Romance' },
{ id: 67, title: 'The Handmaid\'s Tale', author: 'Margaret Atwood', isbn: '978-0385490818', genre: 'Dystopian Fiction' },
{ id: 68, title: 'Invisible Man', author: 'Ralph Ellison', isbn: '978-0679732761', genre: 'African American Fiction' },
{ id: 69, title: 'Native Son', author: 'Richard Wright', isbn: '978-0060837563', genre: 'African American Fiction' },
{ id: 70, title: 'The Bell Jar', author: 'Sylvia Plath', isbn: '978-0061148514', genre: 'Psychological Fiction' },
{ id: 71, title: 'The Road', author: 'Cormac McCarthy', isbn: '978-0307387899', genre: 'Post-Apocalyptic Fiction' },
{ id: 72, title: 'The Kite Runner', author: 'Khaled Hosseini', isbn: '978-1594631931', genre: 'Historical Fiction' },
{ id: 73, title: 'A Thousand Splendid Suns', author: 'Khaled Hosseini', isbn: '978-1594483851', genre: 'Historical Fiction' },
{ id: 74, title: 'Life of Pi', author: 'Yann Martel', isbn: '978-0156027328', genre: 'Adventure Fiction' },
{ id: 75, title: 'The Book Thief', author: 'Markus Zusak', isbn: '978-0375842207', genre: 'Historical Fiction' },
{ id: 76, title: 'The Help', author: 'Kathryn Stockett', isbn: '978-0425232200', genre: 'Historical Fiction' },
{ id: 77, title: 'The Girl with the Dragon Tattoo', author: 'Stieg Larsson', isbn: '978-0307454546', genre: 'Crime Thriller' },
{ id: 78, title: 'The Da Vinci Code', author: 'Dan Brown', isbn: '978-0307474278', genre: 'Mystery Thriller' },
{ id: 79, title: 'The Hunger Games', author: 'Suzanne Collins', isbn: '978-0439023528', genre: 'Young Adult Dystopian' },
{ id: 80, title: 'Twilight', author: 'Stephenie Meyer', isbn: '978-0316015844', genre: 'Young Adult Paranormal Romance' },
{ id: 81, title: 'The Fault in Our Stars', author: 'John Green', isbn: '978-0142424179', genre: 'Young Adult Fiction' },
{ id: 82, title: 'Gone Girl', author: 'Gillian Flynn', isbn: '978-0307588371', genre: 'Psychological Thriller' },
{ id: 83, title: 'The Martian', author: 'Andy Weir', isbn: '978-0553418026', genre: 'Science Fiction' },
{ id: 84, title: 'Ready Player One', author: 'Ernest Cline', isbn: '978-0307887443', genre: 'Science Fiction' },
{ id: 85, title: 'The Night Circus', author: 'Erin Morgenstern', isbn: '978-0307744432', genre: 'Fantasy Fiction' },
{ id: 86, title: 'Where the Crawdads Sing', author: 'Delia Owens', isbn: '978-0735219090', genre: 'Mystery Fiction' },
{ id: 87, title: 'Becoming', author: 'Michelle Obama', isbn: '978-1524763138', genre: 'Autobiography' },
{ id: 88, title: 'Educated', author: 'Tara Westover', isbn: '978-0399590504', genre: 'Memoir' },
{ id: 89, title: 'Sapiens: A Brief History of Humankind', author: 'Yuval Noah Harari', isbn: '978-0062316097', genre: 'Popular Science' },
{ id: 90, title: 'A Brief History of Time', author: 'Stephen Hawking', isbn: '978-0553380163', genre: 'Popular Science' },
{ id: 91, title: 'Thinking, Fast and Slow', author: 'Daniel Kahneman', isbn: '978-0374533557', genre: 'Psychology' },
{ id: 92, title: 'The Power of Habit', author: 'Charles Duhigg', isbn: '978-0812981605', genre: 'Self-Help' },
{ id: 93, title: 'Quiet: The Power of Introverts', author: 'Susan Cain', isbn: '978-0307352156', genre: 'Psychology' },
{ id: 94, title: 'The Seven Habits of Highly Effective People', author: 'Stephen R. Covey', isbn: '978-0743269513', genre: 'Self-Help' },
{ id: 95, title: 'Man\'s Search for Meaning', author: 'Viktor E. Frankl', isbn: '978-0807014295', genre: 'Psychology' },
{ id: 96, title: 'The Immortal Life of Henrietta Lacks', author: 'Rebecca Skloot', isbn: '978-1400052189', genre: 'Science Biography' },
{ id: 97, title: 'In Cold Blood', author: 'Truman Capote', isbn: '978-0679745587', genre: 'True Crime' },
{ id: 98, title: 'The Devil in the White City', author: 'Erik Larson', isbn: '978-0375725609', genre: 'Historical True Crime' },
{ id: 99, title: 'Outliers: The Story of Success', author: 'Malcolm Gladwell', isbn: '978-0316017930', genre: 'Social Psychology' },
{ id: 100, title: 'Freakonomics', author: 'Steven D. Levitt', isbn: '978-0060731328', genre: 'Economics' },
{ id: 101, title: 'The Omnivore\'s Dilemma', author: 'Michael Pollan', isbn: '978-0143038580', genre: 'Food Science' },
{ id: 102, title: 'The Art of War', author: 'Sun Tzu', isbn: '978-1590302255', genre: 'Military Strategy' },
{ id: 103, title: 'The Prince', author: 'Niccolò Machiavelli', isbn: '978-0140449150', genre: 'Political Philosophy' },
{ id: 104, title: 'Meditations', author: 'Marcus Aurelius', isbn: '978-0140449334', genre: 'Philosophy' },
{ id: 105, title: 'The Republic', author: 'Plato', isbn: '978-0140455113', genre: 'Philosophy' },
{ id: 106, title: 'Song of Solomon', author: 'Toni Morrison', isbn: '978-1400033423', genre: 'Literary Fiction' },
{ id: 107, title: 'The House of the Spirits', author: 'Isabel Allende', isbn: '978-0553383805', genre: 'Magical Realism' },
{ id: 108, title: 'The Shadow of the Wind', author: 'Carlos Ruiz Zafón', isbn: '978-0143034902', genre: 'Historical Mystery' },
{ id: 109, title: 'Never Let Me Go', author: 'Kazuo Ishiguro', isbn: '978-1400078776', genre: 'Dystopian Fiction' },
];
let users = JSON.parse(localStorage.getItem(STORAGE_KEY_USERS)) || [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' }
];
let borrowedBooks = JSON.parse(localStorage.getItem(STORAGE_KEY_BORROWED)) || [];
let allBooks = [...books];

// Function to save data to local storage
function saveToLocalStorage() {
    localStorage.setItem(STORAGE_KEY_BOOKS, JSON.stringify(books));
    localStorage.setItem(STORAGE_KEY_USERS, JSON.stringify(users));
    localStorage.setItem(STORAGE_KEY_BORROWED, JSON.stringify(borrowedBooks));
}

function showNotification(message) {
    notificationArea.textContent = message;
    setTimeout(() => {
        notificationArea.textContent = '';
    }, 3000); // Clear after 3 seconds
}

function BookList({ books }) {
    if (books.length === 0) {
        return '<p>No books available.</p>';
    }
    const bookItems = books.map(book => `
        <div class="book-item">
            <h3>${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>ISBN: ${book.isbn}</p>
            <div class="book-actions">
                <button onclick="editBook(${book.id})">Edit</button>
                <button onclick="deleteBook(${book.id})">Delete</button>
                <button onclick="borrowBook(${book.id})">Borrow</button>
            </div>
        </div>
    `).join('');
    return `<div class="book-grid">${bookItems}</div>`;
}

function renderBooks(bookList = books) {
    contentDiv.classList.add('fade-out');
    setTimeout(() => {
        contentDiv.innerHTML = `<h2>Books</h2>${BookList({ books: bookList })}`;
        contentDiv.classList.remove('fade-out');
    }, 300);
}

function AddBookForm() {
    return `
        <h2>Add New Book</h2>
        <form id="addBookForm">
            <label for="title">Title:</label><br>
            <input type="text" id="title" name="title" required><br>
            <label for="author">Author:</label><br>
            <input type="text" id="author" name="author" required><br>
            <label for="isbn">ISBN:</label><br>
            <input type="text" id="isbn" name="isbn" required><br><br>
            <button type="submit">Add Book</button>
        </form>
    `;
}

function renderAddBookForm() {
    contentDiv.innerHTML = AddBookForm();
    document.getElementById('addBookForm').addEventListener('submit', handleAddBook);
}

function handleAddBook(event) {
    event.preventDefault();
    const titleInput = document.getElementById('title');
    const authorInput = document.getElementById('author');
    const isbnInput = document.getElementById('isbn');

    const newBook = {
        id: Date.now(),
        title: titleInput.value,
        author: authorInput.value,
        isbn: isbnInput.value
    };
    books.push(newBook);
    allBooks.push(newBook);
    renderBooks();
    saveToLocalStorage();
    showNotification('Book added successfully!');
}

function editBook(id) {
    const bookToEdit = books.find(book => book.id === id);
    if (bookToEdit) {
        contentDiv.innerHTML = `
            <h2>Edit Book</h2>
            <form id="editBookForm">
                <input type="hidden" id="bookId" value="${bookToEdit.id}">
                <label for="title">Title:</label><br>
                <input type="text" id="title" name="title" value="${bookToEdit.title}" required><br>
                <label for="author">Author:</label><br>
                <input type="text" id="author" name="author" value="${bookToEdit.author}" required><br>
                <label for="isbn">ISBN:</label><br>
                <input type="text" id="isbn" name="isbn" value="${bookToEdit.isbn}" required><br><br>
                <button type="submit">Save Changes</button>
            </form>
        `;
        document.getElementById('editBookForm').addEventListener('submit', handleEditBookSubmit);
    }
}

function handleEditBookSubmit(event) {
    event.preventDefault();
    const bookId = parseInt(document.getElementById('bookId').value);
    const titleInput = document.getElementById('title');
    const authorInput = document.getElementById('author');
    const isbnInput = document.getElementById('isbn');

    const index = books.findIndex(book => book.id === bookId);
    const allBooksIndex = allBooks.findIndex(book => book.id === bookId);
    if (index !== -1 && allBooksIndex !== -1) {
        books[index] = {
            id: bookId,
            title: titleInput.value,
            author: authorInput.value,
            isbn: isbnInput.value
        };
        allBooks[allBooksIndex] = { ...books[index] };
        renderBooks();
        saveToLocalStorage();
        showNotification('Book updated successfully!');
    }
}

function deleteBook(id) {
    books = books.filter(book => book.id !== id);
    allBooks = allBooks.filter(book => book.id !== id);
    renderBooks();
    saveToLocalStorage();
    showNotification('Book deleted successfully!');
}

function UserList({ users }) {
    if (users.length === 0) {
        return '<p>No users available.</p>';
    }
    const userItems = users.map(user => `
        <div class="user-item">
            <h3>${user.name}</h3>
            <div class="user-actions">
                <button onclick="editUser(${user.id})">Edit</button>
                <button onclick="deleteUser(${user.id})">Delete</button>
            </div>
        </div>
    `).join('');
    return `<div class="user-grid">${userItems}</div>`;
}

function renderUsers() {
    contentDiv.classList.add('fade-out');
    setTimeout(() => {
        contentDiv.innerHTML = UserList({ users: users });
        contentDiv.classList.remove('fade-out');
    }, 300);
}

function AddUserForm() {
    return `
        <h2>Add New User</h2>
        <form id="addUserForm">
            <label for="name">Name:</label><br>
            <input type="text" id="name" name="name" required><br><br>
            <button type="submit">Add User</button>
        </form>
    `;
}

function renderAddUserForm() {
    contentDiv.innerHTML = AddUserForm();
    document.getElementById('addUserForm').addEventListener('submit', handleAddUser);
}

function handleAddUser(event) {
    event.preventDefault();
    const nameInput = document.getElementById('name');
    const newUser = {
        id: Date.now(),
        name: nameInput.value
    };
    users.push(newUser);
    renderUsers();
    saveToLocalStorage();
    showNotification('User added successfully!');
}

function editUser(id) {
    const userToEdit = users.find(user => user.id === id);
    if (userToEdit) {
        contentDiv.innerHTML = `
            <h2>Edit User</h2>
            <form id="editUserForm">
                <input type="hidden" id="userId" value="${userToEdit.id}">
                <label for="name">Name:</label><br>
                <input type="text" id="name" name="name" value="${userToEdit.name}" required><br><br>
                <button type="submit">Save Changes</button>
            </form>
        `;
        document.getElementById('editUserForm').addEventListener('submit', handleEditUserSubmit);
    }
}

function handleEditUserSubmit(event) {
    event.preventDefault();
    const userId = parseInt(document.getElementById('userId').value);
    const nameInput = document.getElementById('name');
    const index = users.findIndex(user => user.id === userId);
    if (index !== -1) {
        users[index] = {
            id: userId,
            name: nameInput.value
        };
        renderUsers();
        saveToLocalStorage();
        showNotification('User updated successfully!');
    }
}

function deleteUser(id) {
    users = users.filter(user => user.id !== id);
    renderUsers();
    saveToLocalStorage();
    showNotification('User deleted successfully!');
}

function BorrowedBookList({ borrowedBooks, books, users }) {
    if (borrowedBooks.length === 0) {
        return '<p>No books currently borrowed.</p>';
    }
    const borrowedItems = borrowedBooks.map(item => {
        const book = books.find(b => b.id === item.bookId);
        const user = users.find(u => u.id === item.userId);
        if (book && user) {
            return `
                <li>
                    ${book.title} (Borrowed by: ${user.name}, Due: ${item.dueDate})
                    <button onclick="returnBook(${item.bookId})">Return</button>
                </li>
            `;
        }
        return '';
    }).join('');
    return `<h2>Borrowed Books</h2><ul>${borrowedItems}</ul>`;
}

function renderBorrowedBooks() {
    contentDiv.classList.add('fade-out');
    setTimeout(() => {
        contentDiv.innerHTML = BorrowedBookList({ borrowedBooks: borrowedBooks, books: books, users: users });
        contentDiv.classList.remove('fade-out');
    }, 300);
}

function borrowBook(bookId) {
    if (users.length === 0) {
        alert('No users available to borrow the book.');
        return;
    }
    let userOptions = '<option value="">Select User</option>';
    users.forEach(user => {
        userOptions += `<option value="${user.id}">${user.name}</option>`;
    });

    const bookToBorrow = books.find(book => book.id === bookId);
    if (bookToBorrow && !borrowedBooks.some(item => item.bookId === bookId)) {
        contentDiv.innerHTML = `
            <h2>Borrow Book: ${bookToBorrow.title}</h2>
            <form id="borrowBookForm">
                <label for="userId">Select User:</label><br>
                <select id="userId" name="userId" required>
                    ${userOptions}
                </select><br>
                <label for="dueDate">Due Date:</label><br>
                <input type="date" id="dueDate" name="dueDate" required><br><br>
                <button type="submit">Borrow</button>
            </form>
        `;
        document.getElementById('borrowBookForm').addEventListener('submit', handleBorrowBookSubmit);
    } else if (borrowedBooks.some(item => item.bookId === bookId)) {
        alert('This book is already borrowed.');
    } else {
        alert('Book not found.');
    }
}

function handleBorrowBookSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const selectElement = form.querySelector('#userId');
    const selectedUserId = parseInt(selectElement.value);
    const dueDateInput = form.querySelector('#dueDate');
    const dueDate = dueDateInput.value;
    const bookTitle = form.parentElement.querySelector('h2').textContent.split(': ')[1];
    const book = books.find(b => b.title === bookTitle);

    if (book) {
        borrowedBooks.push({ bookId: book.id, userId: selectedUserId, borrowDate: new Date(), dueDate: dueDate });
        renderBorrowedBooks();
        saveToLocalStorage();
        showNotification('Book borrowed successfully!');
    } else {
        alert('Book not found.');
    }
}

function returnBook(bookId) {
    borrowedBooks = borrowedBooks.filter(item => item.bookId !== bookId);
    renderBorrowedBooks();
    saveToLocalStorage();
    showNotification('Book returned successfully!');
}

function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredBooks = allBooks.filter(book =>
        book.title.toLowerCase().includes(searchTerm) ||
        book.author.toLowerCase().includes(searchTerm) ||
        book.isbn.toLowerCase().includes(searchTerm)
    );
    renderBooks(filteredBooks);
}

showBooksBtn.addEventListener('click', renderBooks);
addBookBtn.addEventListener('click', renderAddBookForm);
showUsersBtn.addEventListener('click', renderUsers);
addUserBtn.addEventListener('click', renderAddUserForm);
showBorrowedBtn.addEventListener('click', renderBorrowedBooks);
searchBtn.addEventListener('click', handleSearch);
searchInput.addEventListener('input', handleSearch);

// Initial rendering
renderBooks();
renderUsers();
renderBorrowedBooks();