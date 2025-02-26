import React from 'react'
import { downloadDatabase } from '../api/ova_endpoints'

export default function Admin() {

  const downloadingDB = async()=>{
    try {
      await downloadDatabase()
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <button onClick={downloadingDB}>Admin</button>
  )
}
