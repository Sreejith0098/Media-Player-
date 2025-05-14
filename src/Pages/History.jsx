import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { deleteHistoryApi, getHistoryApi } from '../services/allApi'

const History = () => {
  const [historyData,setHistorydata] = useState([])
    useEffect(()=>{
      getHistoryData()
    },[])
    const getHistoryData =async ()=>{
      let result = await getHistoryApi()
      console.log(result.data)
      setHistorydata(result.data)
    }
    const deleteHistory=async(id)=>{
            console.log(id);
          let result =  await deleteHistoryApi(id);
          console.log(result);
    }
  
  return (
    <div className='container'>
      <div className="d-flex justify-content-between">
      <h1>Watch History</h1>
      <Link to={"/home"} >Back to home</Link>
      </div>
      <Table striped>
      <thead>
        <tr>
          <th>#</th>
          <th>caption</th>
          <th>Link</th>
          <th>Time stamp</th>
          <th>...</th>
        </tr>
      </thead>
      <tbody>
        {
          historyData?.map((eachHistory,index)=>(
            <tr key={index}>
            <td>{index +1}</td>
            <td>{eachHistory?.caption}</td>
            <td>{eachHistory?.link}</td>
            <td>{eachHistory?.currentDate}</td>
            <td>
              <button onClick={()=>deleteHistory(eachHistory.id)} className='btn text-warning fs-6 fw-bolder'>
              <i className="fa-solid fa-trash"></i>
              </button>
            </td>
          </tr>
          ))
        }
     
       
      </tbody>
    </Table>
    </div>
  )
}

export default History