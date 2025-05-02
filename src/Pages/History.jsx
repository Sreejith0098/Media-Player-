import React from 'react'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const History = () => {
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
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>hdbb</td>
          <td>
            <button className='btn text-warning fs-6 fw-bolder'>
            <i class="fa-solid fa-trash"></i>
            </button>
          </td>
        </tr>
       
      </tbody>
    </Table>
    </div>
  )
}

export default History