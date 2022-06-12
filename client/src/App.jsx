import React, { useEffect, useState } from "react";
import "./App.css";
import Table from "./Table";
import axios from "axios";
import { Users } from "./users";

const App = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get(`http://localhost:5000?q=${query}`);
      setData(res.data);
    };
    if (query.length === 0 || query.length > 2) fetchUsers();
  }, [query]);

  // const keys = ["first_name", "last_name", "email"];

  // const search = (data) => {
  //   return data.filter((item) =>
  //     keys.some((key) => item[key].toLowerCase().includes(query.toLowerCase()))
  //   );
  // };

  return (
    <div className="app">
      <input
        type="text"
        className="search"
        placeholder="Search"
        onChange={(e) => setQuery(e.target.value)}
      />
      <Table data={data} />

      {/* <Table data={search(Users)} /> */}

      {/* <ul className="list">
        {Users.filter((user) =>
          user.first_name.toLowerCase().includes(query)
        ).map((user) => (
          <li key={user.id} className="listItem">
            {user.first_name}
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default App;
