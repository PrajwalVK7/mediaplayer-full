import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { uploadCategory } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Category() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [category, setCategory] = useState({
        id: '',
        name: ''
    });
    console.log(category)

    const handleUpload = async () => {
        const { id, name } = category
        if (!id || !name) {
            toast.warning("Please fill the details completly")
        }
        else {
            const response =await uploadCategory(category)
            console.log(response)
            if (response.status == 201) {
                toast.success(`${response.data.name} is succesfully added`)
                handleClose()
            }
        }
    }

    return (
        <>
            <div className='d-flex align-item-center mt-4 '>
                <button onClick={handleShow} className='btn text-white btn-waring ' style={{ fontSize: '20px',backgroundColor:'orange'}} >Add New Category <i class="fa-solid fa-pencil "></i></button>
            </div>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title style={{ fontSize: '10px' }}>Add new category <i class="fa-solid fa-pencil text-warning"></i></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Please Fill the following details</p>
                    <Form className='border border-secondary p-3'>
                        <Form.Group className="mb-3" >
                            <Form.Control onChange={(e) => setCategory({ ...category, id: e.target.value })} className='mb-3' type="text" placeholder="Enter Category Id " />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Control onChange={(e) => setCategory({ ...category, name: e.target.value })} className='mb-3' type="text" placeholder="Enter Category name" />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button onClick={handleUpload} variant="warning">Upload</Button>
                </Modal.Footer>
            </Modal>
            <ToastContainer  position='top-center' theme='colored' pauseOnFocusLoss pauseOnHover autoClose={2000} />

        </>
    )
}

export default Category;
