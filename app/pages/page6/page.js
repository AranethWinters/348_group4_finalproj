import React from "react";
import Header from '@/app/components/header/page.js'

const UserProfile = () => {
  return (
    <div>
      <Header />
      <main className="user-profile">
        <div className="profile-header">
          <img
            src="https://images.unsplash.com/photo-1693287728941-2e0125a67f90?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="User"
            className="profile-image"
          />
          <div className="user-info">
            <h2 className="username">Alexa Rawles</h2>
            <p className="user-tag">Araneth#1145</p>
          </div>
          <button className="edit-button">Edit</button>
        </div>

        <div className="user-form">
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" placeholder="Full Name" />
          </div>
          <div className="form-group">
            <label>Username</label>
            <input type="text" placeholder="Username" />
          </div>
          <div className="form-group">
            <label>Sex</label>
            <select>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <div className="form-group">
            <label>Country</label>
            <select>
              <option>Country</option>
            </select>
          </div>
        </div>

        <div className="shipping-details">
          <h3>Shipping Details</h3>
          <hr></hr>
          <div className="address">
            <span>⭐ Address 1</span>
            <p>4456, Lorem Ipsum Street, Capiz</p>
          </div>
          <div className="address">
            <span>⭐ Address 2</span>
            <p>6621, 4th Street, New York</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserProfile;