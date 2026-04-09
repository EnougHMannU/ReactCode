import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import './cssfiles/Aboutcard.css';

export default function Cardm() {
    return(
        <div>
          <Container>
            <Row>
              <Col>
                   <Card className="about-card">
                    <Image src="https://anvil.works/img/team/brooke.jpg" className="about-img" roundedCircle />
                {/* <Card.Img variant="top" src="https://anvil.works/img/team/brooke.jpg"  /> */}
                <Card.Body>
                  <Card.Title>Brooke Myers</Card.Title>
                  <Card.Text>
                    Developer Advocate
                  </Card.Text>
                </Card.Body>
              </Card></Col>

              <Col>
               <Card className="about-card">
                <Image src="https://anvil.works/img/team/stu.jpg" className="about-img" roundedCircle />
                {/* <Card.Img variant="top" src="https://anvil.works/img/team/stu.jpg" /> */}
                <Card.Body>
                  <Card.Title>Stu Cork</Card.Title>
                  <Card.Text>
                    Software Developer
                  </Card.Text>
                </Card.Body>
              </Card>
              </Col>

              <Col>
               <Card className="about-card">
                <Image src="https://anvil.works/img/team/patricia.jpg" className="about-img" roundedCircle />
                {/* <Card.Img variant="top" src="https://anvil.works/img/team/patricia.jpg" /> */}
                <Card.Body>
                  <Card.Title>Patricia Carro García</Card.Title>
                  <Card.Text>
                    Developer Advocate
                  </Card.Text>
                </Card.Body>
              </Card>
              </Col>
            </Row>

            <Row>
              <Col>
                   <Card className="about-card">
                    <Image src="https://anvil.works/img/team/rowan.jpg" className="about-img" roundedCircle />
                {/* <Card.Img variant="top" src="https://anvil.works/img/team/brooke.jpg"  /> */}
                <Card.Body>
                  <Card.Title>Rowan Budge</Card.Title>
                  <Card.Text>
                    Developer Advocate
                  </Card.Text>
                </Card.Body>
              </Card></Col>

              <Col>
               <Card className="about-card">
                <Image src="https://anvil.works/img/team/char.jpg" className="about-img" roundedCircle />
                {/* <Card.Img variant="top" src="https://anvil.works/img/team/stu.jpg" /> */}
                <Card.Body>
                  <Card.Title>Char Tai</Card.Title>
                  <Card.Text>
                    Software Developer
                  </Card.Text>
                </Card.Body>
              </Card>
              </Col>

              <Col>
               <Card className="about-card">
                <Image src="https://anvil.works/img/team/pete.jpg" className="about-img" roundedCircle />
                {/* <Card.Img variant="top" src="https://anvil.works/img/team/patricia.jpg" /> */}
                <Card.Body>
                  <Card.Title>Pete Burgers</Card.Title>
                  <Card.Text>
                    Developer Advocate
                  </Card.Text>
                </Card.Body>
              </Card>
              </Col>
            </Row>
          </Container>
      </div>
    );
}