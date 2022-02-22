import "./adminlogin.scss";
import Input from "../../components/input/Input";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const initialState = {
  password: "",
};

const AdminLogin = ({ isAdmin }) => {
  const navigate = useNavigate();
  const [inputValue, setInputvalue] = useState()
  const [status, setStatus] = useState("")
  useEffect(() => {
    console.log(inputValue)
  }, [inputValue])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputValue === "rabi3") { isAdmin(true); navigate("/admin") }
    else {
      isAdmin(false);
      setStatus("Please Try Again !")
    }


  }
  return (
    <div className="admin-container">
      <div className="admin-wrapper">
        <form className="admin-form" onSubmit={handleSubmit}>
          <p>Please insert your private Key</p>
          <Input
            text="Secret Key"
            name="password"
            type="text"
            setvalue={(e) => setInputvalue(e.target.value)}
          />
          <button className="submit-btn" type="submit">Submit</button>
          <h3 className="status-text">{status}</h3>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
