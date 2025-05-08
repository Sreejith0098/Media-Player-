import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Add from '../Components/Add'
import Allvideos from '../Components/Allvideos'
import Allcategories from '../Components/Allcategories'

const Home = () => {
  const[addVideoResponse,setVideoResponse] = useState([])
  return (
    <div>
      <div className="container my-3 d-flex justify-content-between">
       <Add setVideoResponse={setVideoResponse} />
       <Link style={{textDecoration:"none"}} to={"./history"}>Watch History</Link>
      </div>
      <div className="container-fluid row">
        <div className="col-6">
          <Allvideos addVideoResponse={addVideoResponse} />
        </div>
        <div className="col-6">
          <Allcategories />
        </div>
      </div>
    </div>
  )
}

export default Home