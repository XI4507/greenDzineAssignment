import { useEffect, useState } from "react";
import { filterData } from "../utils/Helper";
import Card from "./Card";
import Shimmer from "./Shimmer";

const Body = () => {
  const [users, setUsers] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    const data = await fetch("https://reqres.in/api/users?page=2");
    const json = await data.json();
    setUsers(json?.data);
    setAllUsers(json?.data);
  }

  return users.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="container">
      <div className="search-container">
        <input
          type="text"
          className="inputbar"
          placeholder="Enter First Name"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, allUsers);
            setUsers(data);
          }}
        >
          search
        </button>
      </div>
      {users.map((user) => (
        <Card key={user.id} {...user} />
      ))}
    </div>
  );
};

export default Body;
