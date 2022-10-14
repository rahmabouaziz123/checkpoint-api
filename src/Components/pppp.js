import logo from "./logo.svg";
import "./App.css";
import { UserList } from "./Components/UserList";

import axios from "axios";
import React, { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState([]); // where to store the returned data
  const [error, setError] = useState(null); // where to store the coming errors

  console.log(data);
  useEffect(() => {
    function fetchData() {
      // the function to fetch data from the api
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((res) => setData(res))
        .catch((err) => setError(err));
    }

    fetchData();
  }, []);
  return (
    <div>
      {React.Children.toArray(
        data.map((el) => (
          <div>
            <div> {el.name}</div>

            <div>{el.username}</div>
            <div> {el.email}</div>
          </div>
        ))
      )}
    </div>
  );

  
};
export default App;
