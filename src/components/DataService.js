import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react';


//API Connection (API endpoint)
const DataService = () => {
    useEffect(()=>{
        axios.get("http://ec2-3-20-29-91.us-east-2.compute.amazonaws.com:9001/dynamoDb/getAllOpenJobs").then(
            response =>{ setDate(response.data)
            }   
        )
    },[])
    const [data , setDate] = useState([])
  
  return (
   <>
<pre>
      {
        data.map( item => 
        
        <h2 key={item.id}>
        <pre>
        <h4>LOCATION:</h4>{item.location}
        <h4>SKILLS:</h4>{item.skills}
        <h4>DEPT:</h4>{item.department}
        <h4>Work Status:</h4>{item.workStatus}
         <h4>POSITION:</h4> {item.position}
         <h4>ID:</h4>{item.jobId}
         </pre>
         
         </h2>)
      }
      </pre>
   </>
  )
}

export default DataService