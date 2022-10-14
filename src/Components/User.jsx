import React from "react";
import { Card } from "react-bootstrap";

export const User = ({ user }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }} className="userCard">
        <Card.Body>

          <Card.Title> <span className="titre"> Name:</span> <span> {user.name}</span></Card.Title>

          <Card.Subtitle className="mb-2 "><span  className="titre"> Username :</span><span> {user.username}</span></Card.Subtitle>

          <Card.Text>
            <span className="titre"> Email:</span> 
            <span> {user.email}</span>
          </Card.Text>
          <Card.Text><span className="titre" > Street:</span><span>  {user.address.street}</span></Card.Text>
          <Card.Text> <span className="titre"> Suite:</span> <span> {user.address.suite}</span></Card.Text>
          <Card.Text><span className="titre"> City:</span> <span> {user.address.city}</span></Card.Text>
          <Card.Text> <span className="titre"> Zipcode:</span> <span> {user.address.zipcode}</span></Card.Text>
          <Card.Text><span className="titre"> Lat:</span> <span> {user.address.geo.lat}</span></Card.Text>
          <Card.Text><span className="titre"> Lng: </span><span> {user.address.geo.lng}</span></Card.Text>

          <Card.Text><span className="titre"> Phone:</span> <span> {user.phone}</span></Card.Text>
          <Card.Text><span className="titre"> Website:</span> <span> {user.website}</span></Card.Text>
          <Card.Text><span className="titre"> Name : </span><span> {user.company.name}</span></Card.Text>
          <Card.Text><span className="titre"> CatchPhrase :</span><span> {user.company.catchPhrase}</span></Card.Text>
          <Card.Text><span className="titre"> Bs:</span> <span> {user.company.bs}</span></Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
