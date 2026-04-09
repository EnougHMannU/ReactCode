import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './cssfiles/Contact.css';
import Button from 'react-bootstrap/Button';
import contactpic from './pictures/contactuspng.png';
import Image from 'react-bootstrap/Image';


export default function Contact(){
    return(
        <div>
             <h1 align="center" >Get In Touch</h1>
             <p align="center">Ready to transform your space? Let's start a conversation</p>
           
                <Container>
                    <Row>
                        <Col><Image src={contactpic} alt="contact pic" className='imgclass'></Image></Col>
                <Col align="center"> 
                <Card style={{ width: '18rem' }}>
                    <div className='inputclass'>
                        <input type="text" placeholder='your name'></input>
                        <input type="email" placeholder='your email'></input>
                        <textarea rows={5} cols={40} placeholder='your message'></textarea>
                        </div>
                        <Card.Body>
                         <Button variant="primary">Send message</Button>
                        </Card.Body>
                        </Card>
                </Col>
                    </Row>
                </Container>
                
           
        </div>
    );
}