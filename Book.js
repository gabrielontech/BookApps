export class Book {
constructor(title, author, description, pages, currentPage, read)
{
    this.title = title;
    this.author = author;
    this.description = description;
    this.pages = pages;
    this.currentPage = currentPage;
    this.read = read;
}
                                                             
                                                                    
readBook(page)
{
if (page < 1 || page > this.pages)
    {
        return 0;
    }

if (page >= 1 && page < this.pages)
    {
        this.currentPage = page;
        return 1;
    }
if ( page === this.pages)
    {
        this.currentPage = page;
        this.read = true;
         return 1;
    }

}

}

const learn = new Book(
    'La planete bleu',
    'Michael Jordan',
    'Livre de découverte',
    600,
    600,
    false,
);

const programming = new Book(
    'Programme informatique',
    'Bill Gates',
    'Livre informatique',
    356,
    356,
    false,
);

const culture = new Book(
    '1969 un nouveau jour',
    'Lumumba',
    'Livre culturel',
    1600,
    1600,
    false,
);



export const books = [learn, programming, culture];

