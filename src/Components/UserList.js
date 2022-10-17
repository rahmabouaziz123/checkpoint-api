import React from "react";
import { User } from "./User";

export const UserList = ({ data }) => {
  return (
    <div>
      <h1 className="titreGlobale"> List Users </h1>
      <div className="parentUser">
        {React.Children.toArray(data.map((el) => <User user={el} />))}
      </div>
    </div>
  );
};
