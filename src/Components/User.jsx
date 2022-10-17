import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export const User = ({ user }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }} className="userCard">
        <Card.Body className=" cardTotale">
          <Card.Title>
       
            <span className="titre"> Name:</span> <span> {user.name}</span>
          </Card.Title>

          <Card.Title>
            <span className="titre"> Username :</span>
            <span> {user.username}</span>
          </Card.Title>
          <div className="sousCard">
            <Card.Text>
              <span className="titre"> Email:</span>
              <span> {user.email}</span>
            </Card.Text>
            <Card.Text>
              <span className="titre"> Street:</span>
              <span> {user.address.street}</span>
            </Card.Text>

            <Link to={`/users/${user.id}`}>
              {" "}
              <Button className="btninfo" variant="primary">
                Info
              </Button>{" "}
            </Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};
