import React,{useEffect} from "react";
import "../../styles/modal/loginmodal.css";
import axios from 'axios';

function LoginModal({ setOpenModal }) {

  useEffect(() => {
    const createUser = () => {
      axios({
        url:'http://127.0.0.1:5000/',
        method: 'GET'
      }).catch(e=>console.log(e))
    }
    return createUser
  }, [])

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div id="modal">
      <div className="modal_window">
        <div className="close" onClick={() => setOpenModal(false)}> X </div>
        <form method="POST" onSubmit={(e)=>submitHandler(e)}>
          <input type="email" id="email" name="email" placeholder="Email" />
          <input type="text" id="pass" name="password" placeholder="Password" />
          <button type="submit" onClick={(e) => submitHandler(e)}>
            Login
        </button>
        </form>
      </div>
    </div>
  );
}

export default LoginModal;
