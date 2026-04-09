import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useState} from "react";
import './cssfiles/Loginmodal.css';

function Loginmodal(props) {
    const[username1,setUsername1]=useState();
    const[password1,setPassword1]=useState();
    let API="http://localhost:8080";

    function loginn(){
        let item={
            username:username1,
            password:password1
        }
       fetch(`${API}/searchlogindata`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item)
    })
    .then(response => response.json())
    .then((data) => {
        if (data.success) {
          sessionStorage.setItem("token", data.tokenval);
            props.setLpanel(false);
            alert("Login Successfully");
        } else {
            alert("Invalid Username or Password ");
        }
    })
    .catch((err) => {
        console.error(err);
        alert("Server Error");
    });
    }
  return (
    <Modal
      show={props.panelor}
      onHide={() => props.setLpanel(false)}
      centered
    >
      <Modal.Header closeButton className="login-header">
        <Modal.Title className="login-title">
          Please Login
        </Modal.Title>
      </Modal.Header>

      <Modal.Body className="login-body">
        <div className="input-group">
          <label>USERNAME</label><input type="text" onChange={(e)=>setUsername1(e.target.value)} placeholder="Enter your username" />
        </div>

        <div className="input-group">
          <label>PASSWORD</label><input type="text" onChange={(e)=>setPassword1(e.target.value)} placeholder="Enter your password" />
        </div>
      </Modal.Body>

      <Modal.Footer className="login-footer">
        <Button className="login-btn" onClick={loginn}>
          Login
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Loginmodal;