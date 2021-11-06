import React from "react";

function RegisModal({setRegisterModal}) {
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="RegismodalBackground">
      <div className="RegimodalContainer">
        <button onClick={() => setRegisterModal(false)}> X </button>
        <form method="POST" onSubmit={(e)=>submitHandler(e)}>
            <input type="email" id="email" name="email" placeholder="Email" /><br />
            <input type="text" id="email" name="first_name" placeholder="First Name" /><br />
            <input type="text" id="email" name="last_name" placeholder="Last Name" /><br />
            <input type="email" id="email" name="" placeholder="Phone Number" /><br />
            <input type="password" id="pass" name="password" placeholder="Password" /><br />
            <button type="submit">Register</button>
        </form>

       </div>
    </div>
  );
}
export default RegisModal;

