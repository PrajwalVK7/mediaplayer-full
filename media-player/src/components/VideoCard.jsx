import React from 'react'
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import Zoom from 'react-reveal/Zoom';
import { deleteVideo } from '../services/allAPI';
import { addToHistory } from '../services/allAPI';
function VideoCard({ displayVideo, setDeleteVideoStatus }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = async () => {
        setShow(true);
        const { caption, embededLink } = displayVideo;
        // console.log(">...")
        // console.log(caption,url)
        const today = new Date();
        const timeStamp = new Intl.DateTimeFormat('en-us', {
            year: 'numeric',
            month: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'

        }).format(today)
        console.log(timeStamp)
        let videoDetails = {
            caption: caption,
            embededLink: embededLink,
            timeStamp: timeStamp
        }
        await addToHistory(videoDetails)

    };
    const removeVideo = async (id) => {
        const response = await deleteVideo(id);
        setDeleteVideoStatus(true)
        console.log(response)
    }

    const dragStarted = (e,id)=>{
        console.log(`video card with id ${id} started dragging`)
        e.dataTransfer.setData("videoId",id)
    }

    return (

        <>
            <Row>
                <Col className='d-flex justify-content-center'>
                    <Zoom>
                        <Card draggable onDragStart={(e) => dragStarted(e,displayVideo.id)} 
                        className='mt-5 mb-5' style={{ width: '100%', height: '300px' }}>
                            <Card.Img key={displayVideo.id} onClick={handleShow} variant="top" src={displayVideo.url} style={{ height: '100%' }} />
                            <Card.Body >
                                <div className="d-flex justify-content-evenly align-items.center ">
                                    <Card.Text>{displayVideo.caption}</Card.Text>
                                    <Button onClick={() => removeVideo(displayVideo.id)} variant="danger" className='ms-5'><i className="fa-solid fa-trash"></i></Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Zoom>
                    <Modal
                        show={show}
                        onHide={handleClose}
                        backdrop="static"
                        keyboard={false}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>{displayVideo.caption}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <iframe width="442" height="430" src={displayVideo.embededLink} title="Dil Haareya | Arijit Singh | Tanya Maniktala | Danesh Razvi | Vivian Richard | JUNO | Dharma 2.0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            {/* <Button variant="primary">Understood</Button> */}
                        </Modal.Footer>
                    </Modal>
                </Col>
            </Row>
        </>
    );
}

export default VideoCard;

