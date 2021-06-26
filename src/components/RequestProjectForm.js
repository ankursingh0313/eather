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
import React, {useEffect} from "react";
import {useSelector, useDispatch} from 'react-redux';
import { needFrontendDev, needPhpBackend } from '../actions';
// function initiate(dispatch) {
//     return dispatch(needFrontendDev())
// }
export default function  RequestProjectForm() {
    let state = {};
    const dispatch = useDispatch();
    useEffect(async() => {
        
    }, [])
    // const isLogin = useSelector(state=>state.islogin);
    // console.log("is Login ", isLogin);
    // const dispatch = useDispatch();
    // dispatch(needFrontendDev()).then(()=>dispatch(needPhpBackend()));
        
    // onClick={()=>{dispatch(setLogin())}
    return (
        <>
            <section className="section section-lg bg-gradient-default-1">
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
            </section>
            <section className="section section-lg pt-lg-0 section-contact-us">
                <Container>
                    <Row className="justify-content-center mt--300">
                        <Col lg="8">
                            <Card className="bg-gradient-secondary shadow">
                                <CardBody className="p-lg-5">
                                    <h4 className="mb-1">Request Your Project</h4>
                                    <p className="mt-0">
                                        Your project is very important to us.
                                    </p>
                                    <FormGroup
                                        className={classnames("mt-5", {
                                        focused: state.nameFocused
                                        })}
                                    >
                                        <InputGroup className="input-group-alternative">
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                            <i className="ni ni-circle-08" />
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input
                                            placeholder="Your name"
                                            type="text"
                                            onFocus={e => this.setState({ nameFocused: true })}
                                            onBlur={e => this.setState({ nameFocused: false })}
                                        />
                                        </InputGroup>
                                    </FormGroup>
                                    <FormGroup
                                        className={classnames({
                                        focused: state.emailFocused
                                        })}
                                    >
                                        <InputGroup className="input-group-alternative">
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>
                                            <i className="ni ni-email-83" />
                                            </InputGroupText>
                                        </InputGroupAddon>
                                        <Input
                                            placeholder="Email address"
                                            type="email"
                                            className="is-valid"
                                            onFocus={e => this.setState({ emailFocused: true })}
                                            onBlur={e => this.setState({ emailFocused: false })}
                                        />
                                        </InputGroup>
                                    </FormGroup>
                                    <FormGroup className="">
                                        <Row className="d-flex text-left justify-content-start row-grid mt-1">
                                            <Col lg="6">
                                                <div className="custom-control custom-radio mb-3">
                                                    <input
                                                        className="custom-control-input"
                                                        defaultChecked
                                                        id="development"
                                                        name="custom-radio-2-ds"
                                                        type="radio"
                                                    />
                                                    <label className="custom-control-label" htmlFor="development">
                                                        <b>Development</b>
                                                    </label>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row className="d-flex text-left justify-content-start row-grid mt-1">
                                            <Col lg="6">
                                                <div className="custom-control custom-checkbox mb-3">
                                                    <input
                                                        className="custom-control-input"
                                                        defaultChecked
                                                        id="react_customCheck1"
                                                        type="checkbox"
                                                    />
                                                    <label className="custom-control-label" htmlFor="react_customCheck1">
                                                        React.JS Frontend (Template)
                                                    </label>
                                                </div>
                                                <div className="custom-control custom-checkbox mb-3">
                                                    <input
                                                        className="custom-control-input"
                                                        // defaultChecked
                                                        id="html_customCheck1"
                                                        type="checkbox"
                                                    />
                                                    <label className="custom-control-label" htmlFor="html_customCheck1">
                                                        HTML & CSS Frontend (Template)
                                                    </label>
                                                </div>
                                                <div className="custom-control custom-checkbox mb-3">
                                                    <input
                                                        className="custom-control-input"
                                                        // defaultChecked
                                                        id="view_customCheck2"
                                                        type="checkbox"
                                                    />
                                                    <label className="custom-control-label" htmlFor="view_customCheck2">
                                                        View Frontend (Template)
                                                    </label>
                                                </div>
                                                <div className="custom-control custom-checkbox mb-3">
                                                    <input
                                                        className="custom-control-input"
                                                        // defaultChecked
                                                        id="material_customCheck2"
                                                        type="checkbox"
                                                    />
                                                    <label className="custom-control-label" htmlFor="material_customCheck2">
                                                        Material UI (Template)
                                                    </label>
                                                </div>
                                                <div className="custom-control custom-checkbox mb-3">
                                                    <input
                                                        className="custom-control-input"
                                                        // defaultChecked
                                                        id="customCheck2"
                                                        type="checkbox"
                                                    />
                                                    <label className="custom-control-label" htmlFor="customCheck2">
                                                        Backend / Server Code
                                                    </label>
                                                </div>
                                                <div className="custom-control custom-checkbox mb-3">
                                                    <input
                                                        className="custom-control-input"
                                                        // disabled
                                                        id="customCheck3"
                                                        type="checkbox"
                                                    />
                                                    <label className="custom-control-label" htmlFor="customCheck3">
                                                        Hosting
                                                    </label>
                                                </div>
                                                <div className="custom-control custom-checkbox mb-3">
                                                    <input
                                                        className="custom-control-input"
                                                        // defaultChecked
                                                        // disabled
                                                        id="customCheck4"
                                                        type="checkbox"
                                                    />
                                                    <label className="custom-control-label" htmlFor="customCheck4">
                                                        Domain Name
                                                    </label>
                                                </div>
                                            </Col>
                                            <Col lg="6">
                                                <div className="custom-control custom-radio mb-3">
                                                    <input
                                                        className="custom-control-input"
                                                        // defaultChecked
                                                        id="customRadio5"
                                                        name="custom-radio-2"
                                                        type="radio"
                                                    />
                                                    <label className="custom-control-label" htmlFor="customRadio5">
                                                        PHP Backend
                                                    </label>
                                                </div>
                                                <div className="custom-control custom-radio mb-3">
                                                    <input
                                                        className="custom-control-input"
                                                        id="customRadio6"
                                                        name="custom-radio-2"
                                                        type="radio"
                                                    />
                                                    <label className="custom-control-label" htmlFor="customRadio6">
                                                        Node Backend
                                                    </label>
                                                </div>
                                                <div className="custom-control custom-radio mb-3">
                                                    <input
                                                        className="custom-control-input"
                                                        id="customRadio7"
                                                        name="custom-radio-2"
                                                        type="radio"
                                                    />
                                                    <label className="custom-control-label" htmlFor="customRadio7">
                                                        Java Backend
                                                    </label>
                                                </div>
                                                <div className="custom-control custom-radio mb-3">
                                                    <input
                                                        className="custom-control-input"
                                                        // disabled
                                                        id="customRadio8"
                                                        name="custom-radio-2"
                                                        type="radio"
                                                    />
                                                    <label className="custom-control-label" htmlFor="customRadio8">
                                                        Python Backend
                                                    </label>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row className="d-flex text-left justify-content-start row-grid mt-1">
                                            <Col lg="6">
                                                <div className="custom-control custom-radio mb-3">
                                                    <input
                                                        className="custom-control-input"
                                                        // disabled
                                                        id="service"
                                                        name="custom-radio-2-ds"
                                                        type="radio"
                                                    />
                                                    <label className="custom-control-label" htmlFor="service">
                                                        <b>Service</b>
                                                    </label>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row className="d-flex text-left justify-content-start row-grid mt-1">
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
                                                <div className="custom-control custom-checkbox mb-0">
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
                                                <div className="custom-control custom-checkbox mb-0">
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
                                            </Col>
                                        </Row>
                                    </FormGroup>
                                    <FormGroup>
                                        <div className="progress-wrapper">
                                            <div className="progress-info">
                                                <div className="progress-label">
                                                    <span>Estimated Cost</span>
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
                                        placeholder="Type a message..."
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
                                        Send Message
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