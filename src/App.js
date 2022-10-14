import logo from "./logo.svg";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { UserList } from "./Components/UserList";

import axios from "axios";
import React, { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState([]); // where to store the returned data
  const [error, setError] = useState(null); // where to store the coming errors

  

  try {
    const getData = async () => {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/users`
      );
      setData(data);
    };
    useEffect(() => {
      getData();
    }, []);
  } catch (error) {}

  console.log(data);
  return (
    <div>
      <UserList data={data} />
    </div>
  );
};
export default App;
