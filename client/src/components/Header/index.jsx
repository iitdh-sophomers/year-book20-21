import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Navbar, Container, Nav, Button, NavLink } from 'react-bootstrap';

import DownloadButton from '../DownloadAsPDF';
import Sidebar from '../Sidebar';
import Logo from '../Logo';
import './styles.css';

const Header = ({ active }) => {

    const isTabletorMobile = useMediaQuery({
        query: '(max-width: 700px)'
    });

    const [show, setShow] = useState(false);

    const toggleShow = () => {
        setShow(!show);
    }

    return (
        <Navbar fixed="top" className="header">
            <Container className="fullWidth">
                <Navbar.Brand className="elements">
                    <div className="children">
                        {isTabletorMobile && (
                            <Button className="gradient-text no-border link" onClick={toggleShow}>
                                <i class="fas fa-bars fa-2x"/>
                            </Button>
                        )}
                        <Logo/>
                    </div>
                </Navbar.Brand>
                {!isTabletorMobile && (
                    <>
                        <Nav className="justify-content-end">
                            <NavLink id="1" href="/" className={`elements text a ${(active===1)?'circle-border selected-gradient bcolor':'circle-border-invisible white'}`} >Home</NavLink>
                            <NavLink id="2" href="/events" className={`elements text a ${(active===2)?'circle-border selected-gradient bcolor':'circle-border-invisible white'}`} >Events</NavLink>
                            <NavLink id="3" href="/students" className={`elements text a ${(active===3)?'circle-border selected-gradient bcolor':'circle-border-invisible white'}`} >Students</NavLink>
                            <DownloadButton/>
                        </Nav>
                    </>
                )}
            </Container>
            <Sidebar show={show} handleClose={toggleShow} active={active}/>
        </Navbar>
    )
}

export default Header;
