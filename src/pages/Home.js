
import React from "react";

import {
  Badge,
  Button,
  Card,
  CardBody,
  // CardImg,
  // FormGroup,
  // Input,
  // InputGroupAddon,
  // InputGroupText,
  // InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

import RequestProjectForm from '../components/RequestProjectForm';

class Landing extends React.Component {
  state = {};
//   componentDidMount() {
//     document.documentElement.scrollTop = 0;
//     document.scrollingElement.scrollTop = 0;
//     this.refs.main.scrollTop = 0;
//   }
  render() {
    return (
      <>
        <main>
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="6" className="main-tag-line">
                      <h1 className="display-3 text-white">
                        A Development Systems{" "}
                        <span></span>
                      </h1>
                      <p className="lead text-white">
                        Here we develop <b>Web Applications</b>, <b>Mobile Applications</b>, and <b>APIs</b> in fastest delivery time, by keeping quality in priority.
                      </p>
                      <div className="btn-wrapper">
                        <Button
                          className="btn-icon mb-3 mb-sm-0"
                          color="info"
                          href=""
                        >
                          <span className="btn-inner--icon mr-1">
                            <i className="fa fa-code" />
                          </span>
                          <span className="btn-inner--text">Request Requirment</span>
                        </Button>
                        {/* <Button
                          className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                          color="default"
                          href=""
                        >
                          <span className="btn-inner--icon mr-1">
                            <i className="ni ni-planet" />
                          </span>
                          <span className="btn-inner--text">
                            Services 
                          </span>
                        </Button> */}
                      </div>
                    </Col>
                  </Row>
                </div>
              </Container>
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
            {/* 1st Hero Variation */}
          </div>
          <section className="section section-lg pt-lg-0 pb-lg-5 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <i className="ni ni-world-2" />
                          </div>
                          <h6 className="text-primary text-uppercase">
                            Web Applications
                          </h6>
                          <p className="description mt-3">
                            We develop end to end web application, you no need to worry about any thing. And we provide full customization as per your requirement. And we provide 1 year free service, and minor upgradation for a project.
                          </p>
                          <div>
                            <Badge color="primary" pill className="mr-1">
                              frontend
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              backend
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              hosting & domain
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="primary"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Request Project
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                            <i className="ni ni-mobile-button" />
                          </div>
                          <h6 className="text-success text-uppercase">
                            Mobile Applications (Android/iOS)
                          </h6>
                          <p className="description mt-3">
                            We develop both (Android, and iOS) applications from scratch or on the top of any website. Here also we provide free 1 year service and minor upgradation for your application.
                          </p>
                          <div>
                            <Badge color="success" pill className="mr-1">
                              Design
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              Development
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              Api Creation (if needed)
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              Uploading on App Store/Play Store
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="success"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Request Project
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                            <i className="ni ni-planet" />
                          </div>
                          <h6 className="text-warning text-uppercase">
                            Services & Upgradation
                          </h6>
                          <p className="description mt-3">
                            We provide service of all type of applications, like- web application, mobile application. We also upgrade already created applications. Provide fixes for your already created projects. We provide hosting for your already created projects.
                          </p>
                          <div>
                            <Badge color="warning" pill className="mr-1">
                              Upjgradation
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              Mentainance
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              Fixes
                            </Badge>
                            <Badge color="warning" pill className="mr-1">
                              Hosting
                            </Badge>
                          </div>
                          <Button
                            className="mt-4"
                            color="warning"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section section-lg  pt-lg-0">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-md-2" md="6">
                  <img
                    alt="..."
                    className="img-fluid floating imb"
                    src="./images/circles_y7s2.png"
                  />
                </Col>
                <Col className="order-md-1" md="12">
                  <div className="">
                    <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                      <i className="ni ni-check-bold" />
                    </div>
                    <h3>Things are important to us</h3>
                    <p>
                      We are as a company always take care of some important things which are important to keep us togather and provide service to such awesome peoples.
                    </p>
                    <ul className="list-unstyled mt-5">
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-circle-08" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                              Our Customers
                            </h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-diamond" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">Amazing Product Quality</h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-hat-3" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                              Well Qualified and Energetic Team Members
                            </h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-spaceship" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                              Upgraded Technology
                            </h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-satisfied" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                              Super friendly support team
                            </h6>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          {/* <section className="section bg-secondary">
            <Container>
              <Row className="row-grid align-items-center">
                <Col md="6">
                  <Card className="bg-default shadow border-0">
                    <CardImg
                      alt="..."
                      src=""
                      top
                    />
                    <blockquote className="card-blockquote">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="svg-bg"
                        preserveAspectRatio="none"
                        viewBox="0 0 583 95"
                      >
                        <polygon
                          className="fill-default"
                          points="0,52 583,95 0,95"
                        />
                        <polygon
                          className="fill-default"
                          opacity=".2"
                          points="0,42 583,95 683,0 0,95"
                        />
                      </svg>
                      <h4 className="display-3 font-weight-bold text-white">
                        Design System
                      </h4>
                      <p className="lead text-italic text-white">
                        The Arctic Ocean freezes every winter and much of the
                        sea-ice then thaws every summer, and that process will
                        continue whatever happens.
                      </p>
                    </blockquote>
                  </Card>
                </Col>
                <Col md="6">
                  <div className="pl-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5">
                      <i className="ni ni-settings" />
                    </div>
                    <h3>Our customers</h3>
                    <p className="lead">
                      Don't let your uses guess by attaching tooltips and
                      popoves to any element. Just make sure you enable them
                      first via JavaScript.
                    </p>
                    <p>
                      The kit comes with three pre-built pages to help you get
                      started faster. You can change the text and images and
                      you're good to go.
                    </p>
                    <p>
                      The kit comes with three pre-built pages to help you get
                      started faster. You can change the text and images and
                      you're good to go.
                    </p>
                    <a
                      className="font-weight-bold text-warning mt-5"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      A beautiful UI Kit for impactful websites
                    </a>
                  </div>
                </Col>
              </Row>
            </Container>
          </section> */}
          {/* <section className="section pb-0 bg-gradient-warning">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-lg-2 ml-lg-auto" md="6">
                  <div className="position-relative pl-md-5">
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src=""
                    />
                  </div>
                </Col>
                <Col className="order-lg-1" lg="6">
                  <div className="d-flex px-3">
                    <div>
                      <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                        <i className="ni ni-building text-primary" />
                      </div>
                    </div>
                    <div className="pl-4">
                      <h4 className="display-3 text-white">Modern Interface</h4>
                      <p className="text-white">
                        The Arctic Ocean freezes every winter and much of the
                        sea-ice then thaws every summer, and that process will
                        continue whatever.
                      </p>
                    </div>
                  </div>
                  <Card className="shadow shadow-lg--hover mt-5">
                    <CardBody>
                      <div className="d-flex px-3">
                        <div>
                          <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                            <i className="ni ni-satisfied" />
                          </div>
                        </div>
                        <div className="pl-4">
                          <h5 className="title text-success">
                            Awesome Support
                          </h5>
                          <p>
                            The Arctic Ocean freezes every winter and much of
                            the sea-ice then thaws every summer, and that
                            process will continue whatever.
                          </p>
                          <a
                            className="text-success"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Learn more
                          </a>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                  <Card className="shadow shadow-lg--hover mt-5">
                    <CardBody>
                      <div className="d-flex px-3">
                        <div>
                          <div className="icon icon-shape bg-gradient-warning rounded-circle text-white">
                            <i className="ni ni-active-40" />
                          </div>
                        </div>
                        <div className="pl-4">
                          <h5 className="title text-warning">
                            Modular Components
                          </h5>
                          <p>
                            The Arctic Ocean freezes every winter and much of
                            the sea-ice then thaws every summer, and that
                            process will continue whatever.
                          </p>
                          <a
                            className="text-warning"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Learn more
                          </a>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>

            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section> */}
          <section className="section section-lg">
            <Container>
              <Row className="justify-content-center text-center mb-lg">
                <Col lg="8">
                  <h2 className="display-3">Our amazing Team</h2>
                  <p className="lead text-muted">
                    We have well qualified and amazing team member over here, that's only the reason behind our best product quality.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src="./images/ankur_th_3.jpg"
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Ankur Singh</span>
                        <small className="h6 text-muted">CEO and Founder<br/><span className="ex-sm">(expert in Node, and React-native)</span></small>
                      </h5>
                      <div className="mt-3">
                        {/* <Button
                          className="btn-icon-only rounded-circle"
                          color="warning"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-twitter" />
                        </Button> */}
                        {/* <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="warning"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-facebook" />
                        </Button> */}
                        {/* <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="warning"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-dribbble" />
                        </Button> */}
                      </div>
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src="./images/aman_th.jpg"
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Aman Singh</span>
                        <small className="h6 text-muted">
                          Web Developer<br/><span className="ex-sm">(expert in PHP, Java, Node, and Python)</span>
                        </small>
                      </h5>
                      <div className="mt-3">
                        {/* <Button
                          className="btn-icon-only rounded-circle"
                          color="primary"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-twitter" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="primary"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-facebook" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="primary"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-dribbble" />
                        </Button> */}
                      </div>
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src="./images/anshu_th_1.jpg"
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Anshu Singh</span>
                        <small className="h6 text-muted">UI/UX Designer<br/><span className="ex-sm">(expert in ReactJS, CSS, JavaScript, and other UX/UI libraries)</span></small>
                      </h5>
                      <div className="mt-3">
                        {/* <Button
                          className="btn-icon-only rounded-circle"
                          color="info"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-twitter" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="info"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-facebook" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="info"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-dribbble" />
                        </Button> */}
                      </div>
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src="./images/sanjeet_th.jpg"
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Sanjeet Singh</span>
                        <small className="h6 text-muted">Marketing and Sales</small>
                      </h5>
                      <div className="mt-3">
                        {/* <Button
                          className="btn-icon-only rounded-circle"
                          color="success"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-twitter" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="success"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-facebook" />
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle ml-1"
                          color="success"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          <i className="fa fa-dribbble" />
                        </Button> */}
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section section-lg pt-0">
            <Container>
              <Card className="bg-gradient-warning shadow-lg border-0">
                <div className="p-5">
                  <Row className="align-items-center">
                    <Col lg="12">
                      <h3 className="text-white">
                        Blockchain Devision
                      </h3>
                      <p className="lead text-white mt-3">
                        Recently we have started <b>Blockchain Application</b> development. Here we develop all kind of <b>Smart Contract</b>, and <b>MLM</b> Applications
                      </p>
                    </Col>
                    {/* <Col className="ml-lg-auto" lg="3">
                      <Button
                        block
                        className="btn-white"
                        color="default"
                        href=""
                        size="lg"
                      >
                        Download React
                      </Button>
                    </Col> */}
                  </Row>
                </div>
              </Card>
            </Container>
          </section>
          {/* form */}
          <RequestProjectForm />
        </main>
      </>
    );
  }
}

export default Landing;
