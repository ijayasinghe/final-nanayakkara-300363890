import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css'
import BookCard from '../components/BookCard';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import CreateBook from '../pages/CreateBook';

const Home =() =>{
  return <div>Home</div>
    // const [books, setBooks] = useState([]);
  
    // useEffect(() => {
    //   axios
    //     .get('http://localhost:5000/api/v1/book')
    //     .then((res) => {
    //       setBooks(res.data);
    //     })
    //     .catch((err) => {
    //       console.log('Error from BookList');
    //     });
    // }, []);
  
    // const bookList =
    //   books.length === 0
    //     ? 'there is no book record!'
    //     : books.map((book, k) => <BookCard book={book} key={k} />);
  
    // return (
    //   <div className='BookList'>
    //     <div className='container'>
    //       <div className='row'>
    //         <div className='col-md-12'>
    //           <br />
    //           <h2 className='display-4 text-center'>Books List</h2>
    //         </div>
  
    //         <div className='col-md-11'>
    //           <Link
    //             to='/CreateBook'
    //             className='btn btn-outline-warning float-right'
    //           >
    //             + Add New Book
    //           </Link>
    //           <br />
    //           <br />
    //           <hr />
    //         </div>
    //       </div>
  
    //       <div className='list'>{bookList}</div>
    //     </div>
    //   </div>
    // );
}

export default Home;
