import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { uploadAllVideo } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Add({ setUploadVideoStatus }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [video, setVideo] = useState({
        id: "",
        caption: "",
        url: "",
        embededLink: ""
    })
    // console.log(video)


    const embededVideoLink = (e) => {
        const { value } = e.target;
        const link = `https://www.youtube.com/embed/${value.slice(-11)}`
        console.log("key of url")
        console.log(link)
        setVideo({ ...video, embededLink: link })
    }

    const handleUpload = async () => {
        const { id, caption, url, embededLink } = video;
        if (!id || !caption || !url || !embededLink) {
            toast.warning("Please Fill the form completely")
            // alert("Please Fill the form completly")
        }
        else {
            const response = await uploadAllVideo(video)
            console.log(response)
            if (response.status == 201) {
                toast.success(`${response.data.caption} is succesfullty uploaded`)
                setUploadVideoStatus(response.data)
                handleClose()
            }
            else {
                toast.error("Please check the id")
            }
        }

    }

    return (
        <>
            <div className='d-flex align-item-center mt-4 '>
                <button onClick={handleShow} className='btn text-white ' style={{ fontSize: '30px' }} > Uplaod New Video<i class="fa-solid fa-cloud-arrow-up ms-3"></i></button>
            </div>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title style={{ fontSize: '23px' }}><i class="fa-solid fa-film text-warning"></i> Uplaod Video</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Please Fill the following details</p>
                    <Form className='border border-secondary p-3'>
                        <Form.Group className="mb-3" >
                            <Form.Control onChange={(e) => setVideo({ ...video, id: e.target.value })} className='mb-3' type="text" placeholder="Enter Video Id " />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Control onChange={(e) => setVideo({ ...video, caption: e.target.value })} className='mb-3' type="text" placeholder="Enter Video Caption " />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Control onChange={(e) => setVideo({ ...video, url: e.target.value })} className='mb-3' type="text" placeholder="Enter Video Image URL" />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Control onChange={(e) => embededVideoLink(e)} className='mb-3' type="text" placeholder="Enter Youtube Video Link" />
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

export default Add
