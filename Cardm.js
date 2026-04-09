import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import './cssfiles/Cardm.css';


export default function Cardm() {
  return (
    <Container className="my-5">
      <Carousel >

        {/* SLIDE 1 */}
        <Carousel.Item>
          <Row className="justify-content-center">
            <Col md={3}>
              <Card className="text-center">
                <Card.Img variant="top" src="https://images.seeklogo.com/logo-png/25/1/javascript-logo-png_seeklogo-255387.png" />
                <Card.Body>
                  <Card.Title>JAVASCRIPT</Card.Title>
                  <Card.Text>Learn JavaScript from scratch.</Card.Text>
                  <Button variant="primary">LEARN NOW</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={3}>
              <Card className="text-center">
                <Card.Img variant="top" src="https://images.icon-icons.com/2415/PNG/512/react_original_wordmark_logo_icon_146375.png" />
                <Card.Body>
                  <Card.Title>REACT JS</Card.Title>
                  <Card.Text>Build modern UI with React.</Card.Text>
                  <Button variant="primary">LEARN NOW</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={3}>
              <Card className="text-center">
                <Card.Img variant="top" src="https://images.credly.com/images/51aeb74b-ec87-4069-93fc-0ea449c8d77f/twitter_thumb_201604_node.png" />
                <Card.Body>
                  <Card.Title>NODE JS</Card.Title>
                  <Card.Text>Backend with Node.js.</Card.Text>
                  <Button variant="primary">LEARN NOW</Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={3}>
              <Card className="text-center">
                <Card.Img variant="top" src="https://cdn.iconscout.com/icon/free/png-256/free-c-icon-svg-download-png-1175247.png" />
                <Card.Body>
                  <Card.Title>C LANGUAGE</Card.Title>
                  <Card.Text>Programming fundamentals.</Card.Text>
                  <Button variant="primary">LEARN NOW</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Carousel.Item>

        {/* SLIDE 2 */}
<Carousel.Item>
  <Row className="justify-content-center">
    
    <Col md={3}>
      <Card className="text-center">
        <Card.Img variant="top" src="https://i.pinimg.com/736x/51/45/df/5145df1033fa60f13b3b7125d2b69554.jpg" />
        <Card.Body>
          <Card.Title>C++</Card.Title>
          <Card.Text>Object oriented programming.</Card.Text>
          <Button variant="primary">LEARN NOW</Button>
        </Card.Body>
      </Card>
    </Col>

    <Col md={3}>
      <Card className="text-center">
        <Card.Img variant="top" src="https://cdn.worldvectorlogo.com/logos/java.svg" />
        <Card.Body>
          <Card.Title>JAVA</Card.Title>
          <Card.Text>Enterprise level applications.</Card.Text>
          <Button variant="primary">LEARN NOW</Button>
        </Card.Body>
      </Card>
    </Col>

    <Col md={3}>
      <Card className="text-center">
        <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/3840px-Python-logo-notext.svg.png" />
        <Card.Body>
          <Card.Title>PYTHON</Card.Title>
          <Card.Text>Data science & automation.</Card.Text>
          <Button variant="primary">LEARN NOW</Button>
        </Card.Body>
      </Card>
    </Col>

    <Col md={3}>
      <Card className="text-center">
        <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6935wo8bLZh5FeafJEffqWKDOpNpx6UE5bg&s" />
        <Card.Body>
          <Card.Title>HTML</Card.Title>
          <Card.Text>Web structure fundamentals.</Card.Text>
          <Button variant="primary">LEARN NOW</Button>
        </Card.Body>
      </Card>
    </Col>

  </Row>
</Carousel.Item>


      </Carousel>
    </Container>
  );
}
