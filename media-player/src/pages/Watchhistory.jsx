import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getWatchHistory } from "../services/allAPI";
import { Container, Table } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import { deleteHistory } from "../services/allAPI";

function Watchhistory() {
    const [allVideo, setAllVideo] = useState([])
    const [deleteVideoStatus, setDeleteVideoStatus] = useState(false)
    const getAllHistory = async () => {
        const response = await getWatchHistory()
        // console.log(response)
        const { data } = response;
        // console.log(data)
        setAllVideo(data)
    }

    const handleDelete = async (id) => {
        const response = await deleteHistory(id)
        setDeleteVideoStatus(true)
        console.log(response)
    }
    console.log(allVideo)
    useEffect(() => {
        getAllHistory()
        setDeleteVideoStatus(false)

    }, [deleteVideoStatus])
    return (
        <Fragment>
            <Container>
                <div className="d-flex mt-5 mb-5 justify-content-between alignitems-center">
                    <h3>Watch History</h3>
                    <Link to={'/home'} style={{ textDecoration: 'none', color: 'white' }}><i class="fa-solid fa-arrow-left me-2"></i> Back to Home</Link>
                </div>
                <Table className="mt-5 mb-5 p-4">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>caption</th>
                            <th>URL</th>
                            <th>Time</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allVideo.length > 0 ?
                            allVideo.map((data) => (
                                <tr>
                                    <td>{data.id}</td>
                                    <td>{data.caption}</td>
                                    <td>{data.embededLink}</td>
                                    <td>{data.timeStamp}</td>
                                    <td><Button onClick={() => handleDelete(data.id)} varint="danger" className="btn-danger"><i class="fa-solid fa-trash"></i></Button></td>
                                </tr>
                            )) :
                            <p>No ddata</p>


                        }
                    </tbody>
                </Table>
            </Container>
        </Fragment>
    )
} export default Watchhistory;