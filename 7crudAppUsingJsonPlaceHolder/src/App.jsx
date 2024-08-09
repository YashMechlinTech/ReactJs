import { useEffect, useState } from "react";
import "./App.css";
import Users from "./components/Users";
import AddUser from "./components/AddUser";
function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((error) => {
        console.log(error);
      });
  };

  const onAdd = async (name, email) => {
    await fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        email: email,
      }),
      headers: {
        "Content-type": "application/json;charset=UTF-8",
      },
    })
      .then((res) => {
        if (res.status !== 201) {
          return;
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setUsers((users) => [...users, data]);
      })
      .catch((error) => {
        alert(`error adding users `, error);
      });
  };

  const onDelete = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
      method: "DELETE",
    })
    .then((res) => {
      if (res.status != 200) {
        return;
      } else {
        return setUsers(
          users.filter((user) => {
            return user.id != id;
          })
        );
      }
    })
    .catch(error=>{
      alert(`Error in Deleting the User`+error)
    })
  };

  console.log(users);
  return (
    <>
      <h1>Crud Using json placeholder</h1>
      <AddUser onAdd={onAdd} />
      <div>
        {users.map((user) => (
          <Users
            id={user.id}
            email={user.email}
            name={user.name}
            key={user.id}
            onDelete={onDelete}
          />
        ))}
      </div>
    </>
  );
}

export default App;

// https://jsonplaceholder.typicode.com/users
