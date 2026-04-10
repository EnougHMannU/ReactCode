import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from "react";
import './cssfiles/Loginmodal.css';

export default function Loginmodal(props) {

    const [username1, setUsername1] = useState('');
    const [password1, setPassword1] = useState('');
    const [isRegister, setIsRegister] = useState(false);

    let API = "https://nodecode-1-a6dl.onrender.com";

    // ✅ LOGIN
    function loginn() {
        let item = {
            username: username1,
            password: password1
        }

        fetch(`${API}/searchlogindata`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(item)
        })
            .then(res => res.json())
            .then((data) => {
                if (data.success) {
                    sessionStorage.setItem("token", data.tokenval);

                    props.setIsLoggedIn(true); // 🔥 IMPORTANT

                    props.setLpanel(false);
                    
                } else {
                    alert("Invalid Username or Password ");
                }
            })
            .catch(() => alert("Server Error"));
    }

    // ✅ REGISTER
    function registerr() {
        let item = {
            username: username1,
            password: password1
        }

        fetch(`${API}/postlogindata`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(item)
        })
            .then(res => res.json())
            .then(() => {
                alert("Account Created Successfully");
                setIsRegister(false);
            })
            .catch(() => alert("Server Error"));
    }

    return (
        <Modal
            show={props.panelor}
            onHide={() => props.setLpanel(false)}
            backdrop="static"  // 🔥 can't close without login
            keyboard={false}
            centered
        >
            <Modal.Header className="login-header">
                <Modal.Title className="login-title">
                    {isRegister ? "Create Account" : "Please Login"}
                </Modal.Title>
            </Modal.Header>

            <Modal.Body className="login-body">

                <div className="input-group">
                    <label>USERNAME</label>
                    <input type="text"
                        onChange={(e) => setUsername1(e.target.value)}
                        placeholder="Enter username"
                    />
                </div>

                <div className="input-group">
                    <label>PASSWORD</label>
                    <input type="password"
                        onChange={(e) => setPassword1(e.target.value)}
                        placeholder="Enter password"
                    />
                </div>

                <div className="toggle-text">
                    {
                        isRegister ?
                            <>Already have account?
                                <button onClick={() => setIsRegister(false)} className="link-btn">
                                    Login
                                </button>
                            </>
                            :
                            <>New user?
                                <button onClick={() => setIsRegister(true)} className="link-btn">
                                    Create Account
                                </button>
                            </>
                    }
                </div>

            </Modal.Body>

            <Modal.Footer className="login-footer">
                {
                    isRegister ?
                        <Button className="register-btn" onClick={registerr}>
                            Register
                        </Button>
                        :
                        <Button className="login-btn" onClick={loginn}>
                            Login
                        </Button>
                }
            </Modal.Footer>
        </Modal>
    );
}