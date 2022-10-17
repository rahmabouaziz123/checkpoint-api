import logo from "./logo.svg";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { UserList } from "./Components/UserList";

import axios from "axios";
import React, { useEffect, useState } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Detail } from "./Components/Detail";





const App = () => {
  const [data, setData] = useState([]); // where to store the returned data
  const [error, setError] = useState(null); // where to store the coming errors
 // console.log(data);

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

  return (
    <div>
      <Router>
        <Routes>
          <Route  path="/" element={ <UserList data={data} />}></Route>
            <Route path="/users/:id"   element={<Detail info={data}/>}> </Route>

         

          
        </Routes>
      </Router>

     
    </div>
  );
};
export default App;
