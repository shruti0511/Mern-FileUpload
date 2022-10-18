import { React, useState, useEffect } from "react";
import { Button, Alert } from 'react-bootstrap';
import BooksList from "./BooksList";
import { addBook, getAllBooks, deleteBook, getBook, editBook } from "../../Service/booksService";
import { AddUpdateBook } from "./AddUpdateBook";


export default function Books() {
    const [data, setData] = useState([])
    const [show, setShow] = useState(false);
    const [alert, setAlert] = useState({ visible: false, variant: 'primary', message: '' });
    const [book, setBook] = useState({ title: '', author: '', price: 0,published_year:'', id: 0,book_image:'' })

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        getBookList()
    }, [])

    const getBookList = () => {
        getAllBooks().then((res) => {
            setData(res.data);
        })
    }

    const addBookFun = (data) => {
        if (data.id == 0) {
            addBook(data).then((res) => {

                // if (res.data == 0) {
                //     setAlert({ visible: true, variant: "danger", message: "Book Already Existed!" })
                // }
                // else {
                    setAlert({ visible: true, variant: "success", message: "Book Successfully Added!" })
                    getBookList()
                // }

            })
        }
        else {
            editBook(data).then((res) => {
                // if (res.data == 1) {
                    setAlert({ visible: true, variant: "success", message: "Book Successfully Updated!" })
                    getBookList()
                // }
            })
        }

    }

    const getBookFun = (id) => {
        getBook(id).then((res) => {
            console.log(res)
            setBook(res.data)
            setShow(true)
        })
    }

    const deleteBookfun = (id) => {
        deleteBook(id).then((res) => {
            setAlert({ visible: true, variant: "success", message: "Book Successfully Deleted!" })
            getBookList()
        })

    }

    return (
        <>
        <div className="container mt-4">
            <div className="row">
                <div className="col-10">
                    <h1>Books</h1>
                </div>
                <div className="col-2">
                    <Button
                        variant="primary"
                        className="mt-3"
                        onClick={() => {
                            handleShow();
                            setBook({ title: '', author: '', price: '',published_year:'', id: 0,book_image:''})
                        }}
                    >
                        Add Books
                    </Button>

                </div>
            </div>
            {
                alert.visible == true &&
                <Alert
                    variant={alert.variant}
                    className="mt-3 w-500"
                    onClose={() => setAlert({ visible: false, variant: "primary", message: "" })}
                    dismissible
                    style={{padding:'10px'}}
                >
                    {alert.message}
                </Alert>
            }

            <BooksList books={data} deleteBookfun={deleteBookfun} getBookFun={getBookFun} />
            <AddUpdateBook show={show} handleClose={handleClose} BookFun={addBookFun} BookData={book} />
            </div>
        </>

    )
}