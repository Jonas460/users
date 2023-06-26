import React, { useState } from "react";
import UsersTable from "../UsersTable/UsersTable";
import Notification from "../Notification/Notification";
import "./UsersView.style.css";

const UsersView = () => {
  const url = "https://jsonplaceholder.typicode.com/users";
  const [users, setUsers] = useState([]);
  const [notification, setNotification] = useState(null);

  const removeUser = (user) => {
    const updatedUsers = users.filter((u) => u.id !== user.id);
    setUsers(updatedUsers);
    setNotification(`User "${user.name}" removed`);

    setTimeout(() => {
      setNotification(null);
    }, 2000);
  };

  const fetchUsers = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <h2>Users View</h2>
      <UsersTable users={users} onUserRemove={removeUser} />
      <Notification message={notification} />
      <button className="fetch-users-button" onClick={fetchUsers}>
        Fetch users
      </button>
    </div>
  );
};

export default UsersView;
