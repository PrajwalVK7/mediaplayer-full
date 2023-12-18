import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { updateCategory, uploadCategory } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getAllCategory } from '../services/allAPI';
import { deleteCategory } from '../services/allAPI';
import { getVideoDetails } from '../services/allAPI';
import { Row, Col } from 'react-bootstrap';
import VideoCard from '../components/VideoCard'

function Category() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [allCategories, setAllCategories] = useState([])
    const [deleteCategoryStatus, setDeleteCategoryStatus] = useState([])
    const [category, setCategory] = useState({
        id: '',
        name: '',
        allVideos: []
    });

    const handleUpload = async () => {
        const { id, name } = category
        if (!id || !name) {
            toast.warning("Please fill the details completly")
        }
        else {
            const response = await uploadCategory(category)
            console.log(response)
            if (response.status === 201) {
                toast.success(`${response.data.name} is succesfully added`)
                handleClose()
            }
        }
    }

    const getAllCategoryFromDb = async () => {
        const response = await getAllCategory()
        // const categories
        // console.log("categories1234567")
        // console.log(response.data)
        setAllCategories(response.data)

    }
    const deleteCategoryFromDb = async (id) => {
        const response = await deleteCategory(id)
        setDeleteCategoryStatus(response)
    }

    useEffect(() => {
        getAllCategoryFromDb()
        // setDeleteCategoryStatus(false)
    }, [allCategories,deleteCategoryStatus])
    const dragOver = (e) => {
        e.preventDefault()
        console.log("drag over")

    }

    const videoDrop = async (e, id) => {
        console.log(`video card need to be placed incard width id ${id}`)
        const videoid = e.dataTransfer.getData('videoId')
        console.log(`video width id ${videoid} need to be placed in category width id ${id}`)
        const response = await getVideoDetails(videoid)
        const { data } = response;
        console.log(data)
        const selectedCategory = allCategories?.find((item) => item.id === id);
        console.log("selected category", selectedCategory);
        selectedCategory.allVideos.push(data);
        console.log(selectedCategory.allVideos);
        await updateCategory(id, selectedCategory);
        getAllCategoryFromDb();

    }
    return (
        <>
            <div className='d-flex justify-content-center align-item-center mt-4 '>
                <button onClick={handleShow} className='btn text-white btn-waring ' style={{ fontSize: '20px', backgroundColor: 'orange' }} >Add New Category <i class="fa-solid fa-pencil "></i></button>
            </div>
            <div className='ms-3 ' >
                <div className='m-5  rounded p-3'>
                    <div className=" d-flex justify-content-evenly align-items-center">
                        {allCategories.length > 0 ?
                            allCategories.map((item) => (
                                // item.allVideos?.
                                <div>
                                <div className='ms-3 d-flex justify-content-evenly align-items-center flex-column  p-1' droppable onDragOver={(e) => dragOver(e)}
                                    onDrop={(e) => videoDrop(e, item.id)}>
                                    <h6 className='fs-5'>{item.name}</h6>
                                    <button onClick={() => deleteCategoryFromDb(item.id)} className='btn btn-danger  d-flex align-items-center justify-content-center '><i className="fa-solid fa-trash " style={{ fontSize: '10px' }}> </i></button>
                                </div>
                                <Row>
                                        <Col>
                                            {
                                                item.allVideos?.length > 0 ?
                                                    item.allVideos.map(video => (<VideoCard displayVideo={video} />))
                                                    :
                                                    <p>No item</p>
                                            }
                                        </Col>
                                    </Row>
                                </div>
                                

                            )) : <p>Nothing to display</p>


                        }
                    </div>



                </div>

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
            <ToastContainer position='top-center' theme='colored' pauseOnFocusLoss pauseOnHover autoClose={2000} />

        </>
    )
}

export default Category;
