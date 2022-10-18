import React from "react";
import { Button, Modal, Form } from 'react-bootstrap';
import { Formik } from "formik"
import * as Yup from 'yup';

export function AddUpdateBook({ show, handleClose, BookFun, BookData }) {
    const heading = (BookData.id ==0) ?'Create':'Edit';
    const bookValidation = Yup.object().shape({
        title:Yup.string().required('Book name is Required'),
        author:Yup.string().required('Author name is Required'),
        price:Yup.string().required('Price is Required'),
        published_year:Yup.string().required('Published Year is Required'),

    })
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{heading} Book</Modal.Title>
                </Modal.Header>
                <Formik

                    initialValues={BookData}

                    // validate={values => {
                    //     const errors = {};
                    //     if (!values.name) {
                    //         errors.name = 'Required';
                    //     }
                    //     else if (!values.author) {
                    //         errors.author = 'Required';
                    //     }
                    //     else if (!values.price) {
                    //         errors.price = 'Required';
                    //     }
                    //     return errors;
                    // }}
                    validationSchema={bookValidation}
                    onSubmit={(values, { setSubmitting }) => {
                        // console.log(values.book_image);
                        // alert("sd")
                        BookFun(values)
                    }}
                >

                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        setFieldValue,
                        isSubmitting
                    }) => (

                        <form onSubmit={handleSubmit}>
                            <Modal.Body>

                                <Form.Group className="mb-3" controlId="formBasicName">
                                    <Form.Label>Book Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Book Name"
                                        name="title"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.title}
                                    />
                                    {errors.title && touched.title ? (
                                        <Form.Text style={{ color: 'red' }}>
                                            {errors.title}
                                        </Form.Text>) : null}
                                </Form.Group>



                                <Form.Group className="mb-3" controlId="formBasicAuthor">
                                    <Form.Label>Author Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Author Name"
                                        name="author"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.author}
                                    />
                                    {errors.author && touched.author ? (
                                        <Form.Text style={{ color: 'red' }}>
                                            {errors.author}
                                        </Form.Text>) : null}
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPrice">
                                    <Form.Label>Published Year</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter Published Year"
                                        name="published_year"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.published_year}
                                    />
                                    {errors.published_year && touched.published_year ? (
                                        <Form.Text style={{ color: 'red' }}>
                                            {errors.published_year}
                                        </Form.Text>) : null}
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPrice">
                                    <Form.Label>Price</Form.Label>
                                    <Form.Control
                                        type="number"
                                        placeholder="Enter Price"
                                        name="price"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.price}
                                    />
                                    {errors.price && touched.price ? (
                                        <Form.Text style={{ color: 'red' }}>
                                            {errors.price}
                                        </Form.Text>) : null}


                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPrice">
                                    <Form.Label>Book Image</Form.Label>
                                    <Form.Control
                                        type="file"
                                        name="book_image"
                                        // onChange={(e) =>
                                        //     formik.setFieldValue('book_image', e.currentTarget.files[0])
                                        //   }
                                        onChange={(event) => {
                                            setFieldValue("book_image", event.currentTarget.files[0]);
                                          }}
                                    />


                                </Form.Group>

                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={handleClose} type="submit" disabled={isSubmitting}>
                                    Save Changes
                                </Button>
                            </Modal.Footer>
                        </form>
                    )}
                </Formik>
            </Modal>
        </>
    )
}