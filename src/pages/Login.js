
import React, { useState, useEffect } from "react";

import { Button, Card, CardHeader, CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";
import {useSelector, useDispatch} from 'react-redux';
import { user_Login } from "../redux/actions/authActions";
import { isEmail, isPass } from "../redux/helpers/form-validator.functions";
function Login (props) {
    // const dispatch = useDispatch();
    const { isLoggedIn } = useSelector((state) => state.AuthReducer);
    if (isLoggedIn) props.history.replace("");
    const dispatch = useDispatch();
    // console.log("is Login ", isLoggedIn);
    // const dispatch = useDispatch();
    const [email, setEmail] = useState();
    const [loading, setLoading] = useState(false);
    const [password, setPassword] = useState();
    const submit = (e) => {
        e.preventDefault();
        console.log("email", email)
        if (isEmail(email) && isPass(password)) {
          setLoading(true);
          dispatch(
            user_Login(
              email,
              password,
              () => {
                setLoading(false);
                props.history.replace("");
              },
              () => setLoading(false)
            )
          );
        }
    };
    return (
        <>
            <main>
                <section className="section section-shaped section-lg">
                    <div className="shape shape-style-1 bg-gradient-default">
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                    </div>
                    <Container className="pt-lg-7">
                        <Row className="justify-content-center">
                        <Col lg="5">
                            <Card className="bg-secondary shadow border-0">
                                {/* <CardHeader className="bg-white pb-5">
                                    <div className="text-muted text-center mb-3">
                                    <small>Sign in with</small>
                                    </div>
                                    <div className="btn-wrapper text-center">
                                    <Button
                                        className="btn-neutral btn-icon"
                                        color="default"
                                        href="#pablo"
                                        onClick={e => e.preventDefault()}
                                    >
                                        <span className="btn-inner--icon mr-1">
                                        <img
                                            alt="..."
                                        //   src={require("assets/img/icons/common/github.svg")}
                                        />
                                        </span>
                                        <span className="btn-inner--text">Github</span>
                                    </Button>
                                    <Button
                                        className="btn-neutral btn-icon ml-1"
                                        color="default"
                                        href="#pablo"
                                        onClick={e => e.preventDefault()}
                                    >
                                        <span className="btn-inner--icon mr-1">
                                        <img
                                            alt="..."
                                        //   src={require("assets/img/icons/common/google.svg")}
                                        />
                                        </span>
                                        <span className="btn-inner--text">Google</span>
                                    </Button>
                                    </div>
                                </CardHeader> */}
                                <CardBody className="px-lg-5 py-lg-5">
                                    <div className="text-center text-muted mb-4">
                                        <small>Login with <b>EATHER</b> credentials</small>
                                    </div>
                                    <Form role="form" onSubmit={submit}>
                                        <FormGroup className="mb-3">
                                            <InputGroup className="input-group-alternative">
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                <i className="ni ni-email-83" />
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input placeholder="Email" type="email" onChange={(e) => setEmail(e.target.value)} />
                                            </InputGroup>
                                        </FormGroup>
                                        <FormGroup>
                                            <InputGroup className="input-group-alternative">
                                            <InputGroupAddon addonType="prepend">
                                                <InputGroupText>
                                                <i className="ni ni-lock-circle-open" />
                                                </InputGroupText>
                                            </InputGroupAddon>
                                            <Input
                                                placeholder="Password"
                                                type="password"
                                                autoComplete="off"
                                                onChange={(e) => setPassword(e.target.value)}
                                            />
                                            </InputGroup>
                                        </FormGroup>
                                        {/* <div className="custom-control custom-control-alternative custom-checkbox">
                                            <input
                                            className="custom-control-input"
                                            id=" customCheckLogin"
                                            type="checkbox"
                                            />
                                            <label
                                            className="custom-control-label"
                                            htmlFor=" customCheckLogin"
                                            >
                                            <span>Remember me</span>
                                            </label>
                                        </div> */}
                                        <div className="text-center">
                                            <Button
                                            className="my-4"
                                            color="primary"
                                            type="button"
                                            /*onClick={()=>{dispatch(setLogin())}}*/
                                            onClick={submit}
                                            >
                                                Login
                                            </Button>
                                        </div>
                                    </Form>
                                </CardBody>
                            </Card>
                            <Row className="mt-3">
                                <Col xs="6">
                                    <a
                                    className="text-light"
                                    href="#pablo"
                                    onClick={e => e.preventDefault()}
                                    >
                                    <small>Forgot password?</small>
                                    </a>
                                </Col>
                                <Col className="text-right" xs="6">
                                    <a
                                    className="text-light"
                                    href="#pablo"
                                    onClick={e => e.preventDefault()}
                                    >
                                    <small>Create new account</small>
                                    </a>
                                </Col>
                            </Row>
                        </Col>
                        </Row>
                    </Container>
                </section>
            </main>
        </>
    );
}

export default Login;
