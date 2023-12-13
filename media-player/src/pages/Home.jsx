import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Add from "../components/Add";
import View from "../components/View";
import Category from "../components/Category";
import { useState } from "react";
function Home() {

   const [uploadVideoStatus, setUploadVideoStatus] = useState({})
   return (
      <div>
         <div className="container mb-5">
            <Row>
               <Col lg={6} md={6}>
                  <div className="add-videos d-flex justify-content-center">
                     <Add setUploadVideoStatus={setUploadVideoStatus} />
                  </div>
               </Col>
               <Col lg={6} md={6}>
                  <div className="watch-history mt-4">
                     <Link className="d-flex justify-content-center" to={'/history'} style={{ textDecoration: "none", fontSize: "30px", color: "white" }}>
                        Watch History</Link>
                     <div className="d-flex justify-content-center mt-3">
                        <Category />
                     </div>
                  </div>
               </Col>
            </Row>
            <div className="container ">
               <h4>All videos</h4>
               <View  uploadVideoStatus={uploadVideoStatus} />
            </div>


         </div>
      </div>

   )
}
export default Home;