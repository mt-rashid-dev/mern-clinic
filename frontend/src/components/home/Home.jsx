import "./Home.css";
import doctorPicture from "../../assets/doctor.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Home = () => {
  return (
    <Container fluid>
      {/* top banner */}
      <Row className={"Home-top-banner"}>
        <Col md={6} className={"d-flex align-items-center"}>
          <div className={"px-3"}>
            <h1>Get an Appointment</h1>
            <p className={"mb-5"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus aperiam atque aut commodi consectetur cumque dolore eius eveniet excepturi fuga harum ipsa ipsum itaque magnam molestiae quos ratione, reprehenderit sapiente vitae.</p>
            <button className={"btn-light-2"}>Appointment</button>
          </div>
        </Col>
        <Col md={6} className={"col-6 d-flex justify-content-center align-items-center"}>
          <img src={doctorPicture} alt={""} className={"Home-doctor-picture"}/>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;