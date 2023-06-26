import React from "react";
import "./UsersTable.style.css";

const UsersTable = ({ users, onUserRemove }) => {
  const handleUserRemove = (user) => {
    onUserRemove(user);
  };
  return (
    <div>
      <table className="users-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Company</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.company.name}</td>
              <td>
                <button onClick={() => handleUserRemove(user)}>X</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
