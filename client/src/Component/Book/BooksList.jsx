import React from "react";
import { Table, Button } from 'react-bootstrap';

export default function BooksList({ books, deleteBookfun, getBookFun }) {

    if (books.length === 0) return null

    const BookRow = (item, index) => {
        debugger
        var imagePath = 'http://localhost:5000/images/'+item.book_image;
        return (
            <tr key={index} >
                <td>{index + 1}</td>
                <td><img
                    src={imagePath}
                    alt={item.title}
                    style={{width:'80px', height:'100px'}}
                /></td>
                <td>{item.title}</td>
                <td>{item.author}</td>
                <td>{item.published_year}</td>
                <td>{item.price}</td>
                <td><Button variant="info" className="mx-2" onClick={() => { getBookFun(item._id) }}>Update</Button>{' '}
                    <Button variant="danger" className="mx-2" onClick={() => { deleteBookfun(item._id) }} >Delete</Button>{' '}
                </td>

            </tr>
        )
    }

    const bookTable = books.map((book, index) => BookRow(book, index))



    return (
        <>
            <Table striped className="mt-4">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Image</th>
                        <th>Book Name</th>
                        <th>Author Name</th>
                        <th>Publication Year</th>
                        <th>Price</th>
                        <th>Action</th>

                    </tr>
                </thead>
                <tbody>
                    {bookTable}
                </tbody>
            </Table>
        </>
    )
}