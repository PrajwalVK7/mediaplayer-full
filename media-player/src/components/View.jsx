import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import VideoCard from "./VideoCard";
import { getAllVideo } from "../services/allAPI";
import Zoom from 'react-reveal/Zoom';

function View({ uploadVideoStatus }) {
    const [allVideo, setAllVideo] = useState([])
    const [deleteVideoStatus, setDeleteVideoStatus] = useState(false)

    const getAllVideosFromDb = async () => {
        try {
            const response = await getAllVideo();
            const { data } = response;
            setAllVideo(data);
            console.log(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    useEffect(() => {
        getAllVideosFromDb()
    }, [uploadVideoStatus,deleteVideoStatus])
    return (
        <>
            <Row>
                {
                    allVideo.length > 0 ?
                        allVideo.map((video) => (
                            <Col lg={4} >
                                <Zoom>
                                    <VideoCard displayVideo={video} setDeleteVideoStatus={setDeleteVideoStatus} />
                                </Zoom>
                            </Col>
                        ))
                        :
                        <p>Nothing to Display</p>
                }
            </Row>
        </>
    )
}

export default View;