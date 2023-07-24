console.log("************** DELIVERABLE 04 *********************");

//4. Read Books
//Crea una función isBookRead que reciba una lista de libros y un título y devuelva si se ha leído o no dicho libro.

interface Book {
    title: string;
    isRead: boolean;
}
interface Books extends Array<Book>{};

const isBookReadts = (books: Books, titleToSearch: string): boolean => {
    const readBooks = books.filter(book => book.title === titleToSearch);
    return readBooks[0]?.isRead ?? false;
}

//Ejemplo

const booksts = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
  ];
  
console.log(isBookReadts(booksts, "Devastación")); // true
console.log(isBookReadts(booksts, "Canción de hielo y fuego")); // false
console.log(isBookReadts(booksts, "Los Pilares de la Tierra")); // false