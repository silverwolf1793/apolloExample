import { iBooks } from "../types/books";
import mockDB from "../providers/mockDB";


export const books = (parent: any, args: any, context: any, info: any) => {
    const myBooks: iBooks[] = mockDB;

    // la función foreach recorre el array y ejecuta una función por cada elemento
    myBooks.forEach(book => {
        // esta función recibe como parámetro el elemento actual del array y lo modifica
        // agregando una propiedad id con un valor aleatorio de un entero
        book.id = Math.floor(Math.random() * 1000);
    });

    return myBooks;
};