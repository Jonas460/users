import React from "react";
import "./Notification.style.css";

const Notification = ({ message }) => {
  return (
    <div>
      {message && (
        <div className="notification-container">
          <div className="notification">{message}</div>
        </div>
      )}
    </div>
  );
};

export default Notification;
