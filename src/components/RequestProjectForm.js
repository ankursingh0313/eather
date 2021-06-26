import Slider from "nouislider";
import {
    // Badge,
    Button,
    Card,
    CardBody,
    // CardImg,
    FormGroup,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col,
    Progress
} from 'reactstrap';
import classnames from "classnames";
import React, {useEffect, useState} from "react";
import {useSelector, useDispatch} from 'react-redux';

export default function  RequestProjectForm() {
    let state = {};
    const [name, setName] = useState(false);
    const [email, setEmail] = useState(false);
    const [show_services, showServices] = useState(false);
    const [show_application, showApplication] = useState(false);
    const [show_web_development, showWebDevelopment] = useState(true);

    const dispatch = useDispatch();
    useEffect(async() => {
        
    }, [])
    
    return (
        <>
            {/* <section className="section section-lg bg-gradient-default-1"> */}
                <Container className="pt-lg pb-300">
                </Container>
                {/* SVG separator */}
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
            {/* </section> */}
            <section className="section section-lg pt-lg-0 section-contact-us bg-gradient-default-1">
                <Container id="reqform">
                    <Row className="justify-content-center mt--300">
                        <Col lg="8">
                            <Card className="bg-gradient-secondary shadow  mt-lg-7">
                                <CardBody className="p-lg-5">
                                    <h4 className="mb-1">Request Your Project</h4>
                                    <p className="mt-0">
                                        Your project is very important to us.
                                    </p>
                                    <FormGroup
                                        className={classnames("mt-5", {
                                        focused: name
                                        })}
                                    >
                                        <InputGroup className="input-group-alternative">
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                            <i className="ni ni-circle-08" />
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input
                                            placeholder="Your name*"
                                            type="text"
                                            onFocus={e => setName(true)}
                                            onBlur={e => setName(false)}
                                        />
                                        </InputGroup>
                                    </FormGroup>
                                    <FormGroup
                                        className={classnames({
                                        focused: email
                                        })}
                                    >
                                        <InputGroup className="input-group-alternative">
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                            <i className="ni ni-email-83" />
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input
                                            placeholder="Email address*"
                                            type="email"
                                            className="is-valid"
                                            onFocus={e => setEmail(true)}
                                            onBlur={e => setEmail(false)}
                                        />
                                        </InputGroup>
                                    </FormGroup>
                                    <FormGroup className="">
                                        <Row className="d-flex text-left justify-content-start row-grid mt-1">
                                            <Col lg="6">
                                                <div className="custom-control custom-radio mb-3 mt-3">
                                                    <input
                                                        className="custom-control-input"
                                                        defaultChecked
                                                        id="web_development"
                                                        name="custom-radio-2-ds"
                                                        type="radio"
                                                        onChange={(e)=>{ showWebDevelopment(e.target.checked); showServices(false); showApplication(false);}}
                                                    />
                                                    <label className="custom-control-label" htmlFor="web_development">
                                                        <b>Web Application Development</b>
                                                    </label>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row className={show_web_development?"d-flex text-left justify-content-start row-grid mt-1{}":"hidden"} id="application_c">
                                            <Col lg="6">
                                                <div className="custom-control custom-checkbox mb-0">
                                                    <input
                                                        className="custom-control-input"
                                                        // defaultChecked
                                                        id="frontend-dev"
                                                        type="checkbox"
                                                    />
                                                    <label className="custom-control-label" htmlFor="frontend-dev">
                                                        Frontend
                                                    </label>
                                                </div>
                                            </Col>
                                            <Col lg="6">
                                                <div className="custom-control custom-checkbox mb-0">
                                                    <input
                                                        className="custom-control-input"
                                                        // defaultChecked
                                                        id="backend-dev"
                                                        type="checkbox"
                                                    />
                                                    <label className="custom-control-label" htmlFor="backend-dev">
                                                        Backend
                                                    </label>
                                                </div>
                                            </Col>
                                        </Row>
                                    </FormGroup>
                                    <FormGroup className="">
                                        <Row className="d-flex text-left justify-content-start row-grid mt-1">
                                            <Col lg="6">
                                                <div className="custom-control custom-radio mb-3">
                                                    <input
                                                        className="custom-control-input"
                                                        // defaultChecked
                                                        id="mobile_development"
                                                        name="custom-radio-2-ds"
                                                        type="radio"
                                                        onChange={(e)=>{showServices(false); showApplication(e.target.checked); showWebDevelopment(false);}}
                                                    />
                                                    <label className="custom-control-label" htmlFor="mobile_development">
                                                        <b>Mobile Application Development</b>
                                                    </label>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row className={show_application?"d-flex text-left justify-content-start row-grid mt-1{}":"hidden"} id="web_application_c">
                                            <Col lg="6">
                                                <div className="custom-control custom-checkbox mb-0">
                                                    <input
                                                        className="custom-control-input"
                                                        // defaultChecked
                                                        id="flutter-dev"
                                                        type="checkbox"
                                                    />
                                                    <label className="custom-control-label" htmlFor="flutter-dev">
                                                        Flutter
                                                    </label>
                                                </div>
                                            </Col>
                                            <Col lg="6">
                                                <div className="custom-control custom-checkbox mb-0">
                                                    <input
                                                        className="custom-control-input"
                                                        // defaultChecked
                                                        id="react-native-dev"
                                                        type="checkbox"
                                                    />
                                                    <label className="custom-control-label" htmlFor="react-native-dev">
                                                        ReactNative
                                                    </label>
                                                </div>
                                            </Col>
                                        </Row>
                                    </FormGroup>
                                    <FormGroup className="">
                                        <Row className="d-flex text-left justify-content-start row-grid mt-1">
                                            <Col lg="6">
                                                <div className="custom-control custom-radio mb-3">
                                                    <input
                                                        className="custom-control-input"
                                                        // disabled
                                                        id="service"
                                                        name="custom-radio-2-ds"
                                                        type="radio"
                                                        onChange={(e)=>{showServices(e.target.checked); showApplication(false); showWebDevelopment(false);}}
                                                    />
                                                    <label className="custom-control-label" htmlFor="service">
                                                        <b>Service</b>
                                                    </label>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row className={show_services?"d-flex text-left justify-content-start row-grid mt-1{}":"hidden"} id="mentainance">
                                            <Col lg="6">
                                                <div className="custom-control custom-checkbox mb-3">
                                                    <input
                                                        className="custom-control-input"
                                                        // defaultChecked
                                                        id="service-frontend-fix"
                                                        type="checkbox"
                                                    />
                                                    <label className="custom-control-label" htmlFor="service-frontend-fix">
                                                        Frontend Fix & service
                                                    </label>
                                                </div>
                                                <div className="custom-control custom-checkbox mb-3">
                                                    <input
                                                        className="custom-control-input"
                                                        // defaultChecked
                                                        id="service-backend-fix"
                                                        type="checkbox"
                                                    />
                                                    <label className="custom-control-label" htmlFor="service-backend-fix">
                                                        Backend Fix & service
                                                    </label>
                                                </div>
                                                <div className="custom-control custom-checkbox mb-0">
                                                    <input
                                                        className="custom-control-input"
                                                        // defaultChecked
                                                        id="mobile-applicatio-fix"
                                                        type="checkbox"
                                                    />
                                                    <label className="custom-control-label" htmlFor="mobile-applicatio-fix">
                                                        Mobile Applicatio Fix & Service
                                                    </label>
                                                </div>
                                            </Col>
                                            <Col lg="6">
                                                <div className="custom-control custom-checkbox mb-3">
                                                    <input
                                                        className="custom-control-input"
                                                        // disabled
                                                        id="service-frontend-upgrade"
                                                        type="checkbox"
                                                    />
                                                    <label className="custom-control-label" htmlFor="service-frontend-upgrade">
                                                        Frontend Upgradation
                                                    </label>
                                                </div>
                                                <div className="custom-control custom-checkbox mb-3">
                                                    <input
                                                        className="custom-control-input"
                                                        // defaultChecked
                                                        // disabled
                                                        id="service-backend-upgrade"
                                                        type="checkbox"
                                                    />
                                                    <label className="custom-control-label" htmlFor="service-backend-upgrade">
                                                        Backend Upgradation and Features Add-on
                                                    </label>
                                                </div>
                                                <div className="custom-control custom-checkbox mb-0">
                                                    <input
                                                        className="custom-control-input"
                                                        // defaultChecked
                                                        // disabled
                                                        id="mobile-application-upgrade"
                                                        type="checkbox"
                                                    />
                                                    <label className="custom-control-label" htmlFor="mobile-application-upgrade">
                                                        Mobile Application Upgradation and Features Add-on
                                                    </label>
                                                </div>
                                            </Col>
                                        </Row>
                                    </FormGroup>
                                    <FormGroup>
                                        <div className="progress-wrapper">
                                            <div className="progress-info">
                                                <div className="progress-label">
                                                    <span>Estimated Cost <span className="note">(This cost is only estimated, it could change according to your customixation)</span></span>
                                                </div>
                                                <div className="progress-percentage">
                                                    <span>$60</span>
                                                </div>
                                            </div>
                                            <Progress max="2000" min="10" value="60" color="default" />
                                        </div>
                                    </FormGroup>
                                    <FormGroup className="mb-4">
                                        <Input
                                        className="form-control-alternative"
                                        cols="80"
                                        name="name"
                                        placeholder="Describe your project..."
                                        rows="4"
                                        type="textarea"
                                        />
                                    </FormGroup>
                                    <div>
                                        <Button
                                        block
                                        className="btn-round"
                                        color="default"
                                        size="lg"
                                        type="button"
                                        >
                                        Create Request
                                        </Button>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
    
}