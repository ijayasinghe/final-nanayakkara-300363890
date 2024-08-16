const router = require('express').Router();
let Book = require('../models/bookList.model');

//@router GET /api/v1/book
//get all the books
router.route('/').get((req, res) => {
  Book.find()
    .then((books) => res.json(books))
    .catch((err) => res.status(400).json('Error: ' + err));
});

//@router POST /api/v1/book
//save a book
router.route('/').post(async (req, res) => {
    
    try {
        if (req.body.bookTitle == null || req.body.bookAuthor == null ) {
            res.json("Please submit all the fields for book title,author, and description.")
        } else {
            const bookTitle = req.body.bookTitle;
            const bookAuthor = req.body.bookAuthor;
            const description = req.body.description;
            // create a new Book object 
            const newBook = new Book({
                bookTitle,
                bookAuthor,
                description,
            });

            // save the new object (newBook)
            newBook
                .save()
                .then(() => res.json("Book added!"))
                .catch((err) => res.status(400).json("Error: " + err));
        }
    } catch (error) {
        // console.error('Error:', error);
        res.status(500).json({ message: error.message });
    }
});


//@router GET /api/v1/book/:id
//get single book by id
router.route('/:id').get((req, res) => {
  console.log('just id' + req.params.id);
  Book.findById(req.params.id)
    .then((book) => res.json(book))
    .catch((err) => res.status(400).json('Error: ' + err));
});

//@router DELETE /api/v1/book/:id
//delete a book by id
router.route('/:id').delete(async (req, res) => {
  console.log('delete logged');
await Book.findByIdAndDelete(req.params.id)
    .then(() => res.json('Book deleted.'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

//@router POST /api/v1/book/:id
//update a book by id
router.route('/:id').post(async (req, res) => {
  console.log(req.params.id);
await  Book.findById(req.params.id)
    .then((bookforedit) => {
      bookforedit.book = req.body.book;

      bookforedit
        .save()
        .then(() => res.json('Book updated!'))
        .catch((err) => res.status(400).json('Error: ' + err));
    })
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;