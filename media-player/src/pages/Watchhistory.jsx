import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getWatchHistory } from "../services/allAPI";
import { Container, Table } from "react-bootstrap";
function Watchhistory() {
    const [allVideo, setAllVideo] = useState([])
    const getAllHistory = async () => {
        const response = await getWatchHistory()
        // console.log(response)
        const { data } = response;
        // console.log(data)
        setAllVideo(data)
    }
    console.log(allVideo)

    useEffect(() => {
        getAllHistory()
    }, [])
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
                        </tr>
                    </thead>
                    <tbody>
                        {allVideo.length > 0 &&
                            allVideo.map((data) => (
                                <tr>
                                    <td>{data.id}</td>
                                    <td>{data.caption}</td>
                                    <td>{data.embededLink}</td>
                                    <td>{data.timeStamp}</td>
                                </tr>
                            ))

                        }
                    </tbody>
                </Table>
            </Container>
        </Fragment>
    )
} export default Watchhistory;