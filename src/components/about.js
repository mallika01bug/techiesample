import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import img1 from "../assests/images/img1.jpg";
import ProgressBar from "react-bootstrap/ProgressBar";

export default function AppAbout() {
  const html = 80;
  const resp = 95;
  const photo = 60;
  return (
    <section id="about" className="block about-block">
      <Container fluid>
        <div className="title-holder">
          <h2>About Us</h2>
          <div className="subtitle"> learn more about us </div>
        </div>
        <Row>
          <Col>
            <Image src={img1} />
          </Col>
          <Col>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <p>
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
            <div className="progress-block">
              <h4>HTML / CSS / JAVASCRIPT</h4>
              <ProgressBar now={html} label={`${html}%`} />
            </div>
            <div className="progress-block">
              <h4>Responsive</h4>
              <ProgressBar now={resp} label={`${resp}%`} />
            </div>
            <div className="progress-block">
              <h4>Photoshop</h4>
              <ProgressBar now={photo} label={`${photo}%`} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}