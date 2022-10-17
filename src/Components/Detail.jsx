

import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'

export const Detail = ({info}) => {
   // console.log(info)
   const {id}=useParams()

   const item=info.find(el=>el.id==id)


  return (
    <div>



        <div className="Detail">
         
         <div> <span className="titre"> Id:</span> <span> {item.id}</span></div>
          <div> <span className="titre"> Name:</span> <span> {item.name}</span></div>

          <div className="mb-2 "><span  className="titre"> Username :</span><span> {item.username}</span></div>

         
            <span className="titre"> Email:</span> 
            <span> {item.email}</span>
       
          <div><span className="titre" > Street:</span><span>  {item.address.street}</span></div>
          <div> <span className="titre"> Suite:</span> <span> {item.address.suite}</span></div>
          <div><span className="titre"> City:</span> <span> {item.address.city}</span></div>
          <div> <span className="titre"> Zipcode:</span> <span> {item.address.zipcode}</span></div>
          <div><span className="titre"> Lat:</span> <span> {item.address.geo.lat}</span></div>
          <div><span className="titre"> Lng: </span><span> {item.address.geo.lng}</span></div>

          <div><span className="titre"> Phone:</span> <span> {item.phone}</span></div>
          <div><span className="titre"> Website:</span> <span> {item.website}</span></div>
          <div><span className="titre"> Name : </span><span> {item.company.name}</span></div>
          <div><span className="titre"> CatchPhrase :</span><span> {item.company.catchPhrase}</span></div>
          <div><span className="titre"> Bs:</span> <span> {item.company.bs}</span></div>
      
          <div><Link to={`/` } >  <Button  className="btnHome" variant="primary">Home</Button>    </Link></div>
    </div>
        
    </div>
  )
}
