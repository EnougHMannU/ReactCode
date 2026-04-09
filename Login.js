import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './cssfiles/Login.css';

export default function Login(){
    return(
        <div>
            
            <h1 align="center">Login</h1>
            <h4 align="center">HI, welcome back👋🏻</h4>
            <center><Card  style={{ width: '18rem' }}>
                    <div className='inputclass'>
                        Username<input type="text" placeholder='E.g=johndeer@gmail.com'></input>
                        Password<input type="password" placeholder='E.g=wesdrfedsw'></input>
                        
                        </div>
                        <Card.Body>
                         <Button variant="primary">Login</Button>
                         <div>Not registered yet?<a href="google.com">Create an account</a></div>
                        </Card.Body>
                        </Card>
            </center>
            
        </div>
    );
}