
import React from "react";
// reactstrap components
import {
    UncontrolledCollapse,
    // DropdownMenu,
    // DropdownItem,
    // UncontrolledDropdown,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Container,
    Row,
    Col
} from "reactstrap";


class NavigationBar extends React.Component {
    render() {
        return (
            <>
                <header className="header-global">
                    <Navbar
                        className="navbar-horizontal navbar-dark bg-dark mt-4"
                        expand="lg"
                    >
                        <Container>
                            <NavbarBrand className="mr-lg-5" to="/">
                                <img
                                    alt="..."
                                    src="./images/lgo.png"
                                />
                            </NavbarBrand>
                            <button className="navbar-toggler" id="navbar_global">
                                <span className="navbar-toggler-icon" />
                            </button>
                            <UncontrolledCollapse
                                toggler="#navbar_global"
                                navbar
                            >
                                <div className="navbar-collapse-header">
                                    <Row>
                                        <Col className="collapse-brand" xs="6">
                                            {/* <Link to="/"> */}
                                            <img
                                                alt="..."
                                                src="./images/logo-desk-transparent.png"
                                            />
                                            {/* </Link> */}
                                        </Col>
                                        <Col className="collapse-close" xs="6">
                                            <button className="navbar-toggler" id="navbar_global">
                                                <span />
                                                <span />
                                            </button>
                                        </Col>
                                    </Row>
                                </div>
                                <Nav className="ml-lg-auto" navbar >
                                    <NavItem>
                                        <NavLink href="#pablo" onClick={e => e.preventDefault()} >
                                            Home <span className="sr-only">(current)</span>
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="#pablo" className="disabled-w-icon" onClick={e => e.preventDefault()}>
                                            Projects 
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="#reqform">
                                            Request Project
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                                            About
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                                            Contact Us
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href="#pablo" className="disabled-w-icon" onClick={e => e.preventDefault()}>
                                            Login 
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                            </UncontrolledCollapse>
                        </Container>
                    </Navbar>
                </header>
            </>
        );
    }
}

export default NavigationBar;
