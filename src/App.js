import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

const App = () => {
  const [list, setList] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getList();
  }, []);

  const getList = () => {
    fetch("https://jsonplaceholder.typicode.com/users/")
      .then((res) => res.json())
      .then((data) => setList(data))
      .catch((err) => console.log(err));
  };

  const handleSearch = (text) => {
    console.log(text)
    const newList = list.filter((item) => {
      return item.name.toLowerCase().includes(text);
    });
    setList(newList);
    setSearch(text);
  };

  return (
    <div className="App">
      <div className="header-name">TODO LIST</div>
      <input
        type="text"
        className="input-style"
        placeholder="Search by Name"
        onChange={(event) => handleSearch(event.target.value)}
      />
      <div className="list-wrapper">
        {list.length ===0 && <div className="no-results">No Results</div>}
        {list?.map((item, index) => {
          return (
            <div className="list-item" key={index}>
              <div className="item-style">{item.name}</div>
              <div className="item-style">{item.username}</div>
              <div className="item-style">{item.email}</div>
              <div className="item-style">{item.address.city}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
