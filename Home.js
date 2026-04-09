import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Cardm from './Cardm.js';
import Slider from './Slider.js';
import './cssfiles/Home.css';
import Image from 'react-bootstrap/Image';
import softechannoucement from './pictures/softechannoucementpic.png';

export default function Home(){
    return(
        <div>
            <Slider/>
        <Container>
            <center>
            <Row>
                <Col className="flex-container" xs="8">
                <Row>
                    <Col><h1>SOFTECH</h1>
                <h5>
                    Last decade has witnessed the advent of a new ‘Super Power’- Information. Direct & undiluted access to right data, at the right time & in the right perspective is the real power. And the tools & methodology that sustain the flow of this data are under the realm of IT. Information Technology is a philosophy, and not just a tool. HARTRON is committed to provide right tools, right techniques & right methodologies to ensure that even the common people can contribute & participate in optimizing & enhancing Haryana. Last decade has witnessed the advent of a new ‘Super Power’- Information. Direct & undiluted access to right data, at the right time & in the right perspective is the real power .
                     </h5></Col>
                     <Col><Image src={softechannoucement} alt="softech pic" className="myimageclass"></Image></Col>

                     </Row>
                     </Col>

                <Col className="flex-container"><h1>News & Events</h1>
                <h6>Top Global & Local Headlines (Jan 21, 2026)
                    Davos 2026: Donald Trump is attending the World Economic Forum, with reports highlighting a push for the acquisition of Greenland, while the EU stalls a trade deal with the US following tariff threats.
                    India-EU Trade: European Commission President Ursula von der Leyen signals a "historic" trade agreement with India is in the final stages.
                    Stock Market Volatility: Sensex dropped 1,065 points and Nifty fell over 1.2% amidst rising global geopolitical tensions, while gold and silver hit record highs.
                    Technology & AI: YouTube CEO Neal Mohan announced new 2026 initiatives focusing on AI-powered creator tools. Additionally, Adobe Acrobat introduced AI tools to turn PDFs into podcasts.
                    India Infrastructure & Transport: New Amrit Bharat Express trains are launching in Kerala this week.
                    Upcoming Events & Incidents.</h6></Col>
            </Row>
            <Row>
                <Col> <Cardm/> </Col>
            </Row>
             
            </center>
        </Container>
        </div>
    );
}