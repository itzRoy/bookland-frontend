import "./adminlogin.scss";
import Input from "../../components/input/Input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [inputValue, setInputvalue] = useState()
  const history = useNavigate()
  const handleClick = async() =>{
    (inputValue === 'cMsG9TRoR' ? history('/admin/cMsG9TRoR') : history('/login'))
  }
  return (
      <div className="admin-container">
        <div className="admin-wrapper">
          <form className="admin-form" >
            <p>Please insert your private Key</p>
            <Input
              text="Secret Key"
              name="password"
              type="text"
              setvalue={(e) => setInputvalue(e.target.value)}
            />
            <button className="submit-btn" type="submit" onClick={()=>{handleClick()}}>Submit</button>
          </form>
        </div>
      </div>
  );
};


export default AdminLogin;
