import "./adminlogin.css";
import Input from "../../components/input/Input";
import axios from "axios";
import { useEffect, useState } from "react";

const initialState = {
  password: "",
};

const AdminLogin = () => {
  return (
    <div className="admin-login">
      <p>Please insert your private Key</p>
      <div>
        <Input
          text="Secret Key"
          name="password"
          type="text"
          handleChange={handleChange}
        />
        <div className="submit-btn">
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
