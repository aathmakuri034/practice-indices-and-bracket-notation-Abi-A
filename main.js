// Task 1
let books = [
    ["Great Gatsby", "1984", "The hobbit"],
    ["Of Mice and Men", "Matilda", "Little Women"],
    ["Pride and Prejudice", "A Head full of ghosts", "Dangers of Smoking in Bed"]
];

// Task 2
for(booklist of books){
    for(book of booklist){
        console.log(book + " ");
    }
}
console.log("------------------------------------------------------");

// Task 3
for(let row = 0; row<books.length; row++){
    for(let col = 0; col<books[row].length; col++){
        console.log(books[row][col]);
    }
}
console.log("------------------------------------------------------");

// Task 4
for(let i = 0; i<books[1].length; i++){
    console.log(books[1][i]);
}
