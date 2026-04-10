import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './cssfiles/Contact.css';
import Button from 'react-bootstrap/Button';
import contactpic from './pictures/contactuspng.png';
import Image from 'react-bootstrap/Image';

export default function Contact() {
    return (
        <div>

            <h1>Get In Touch</h1>
            <p>Ready to transform your space? Let's start a conversation</p>

            <Container>
                <Row className="align-items-center">

                    <Col md={6}>
                        <Image src={contactpic} alt="contact pic" className='imgclass' />
                    </Col>

                    <Col md={6} className="d-flex justify-content-center">
                        <Card>
                            <div className='inputclass'>
                                <input type="text" placeholder='Your Name' />
                                <input type="email" placeholder='Your Email' />
                                <textarea rows={5} placeholder='Your Message'></textarea>
                            </div>

                            <Card.Body>
                                <Button>Send Message</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </Container>

        </div>
    );
}