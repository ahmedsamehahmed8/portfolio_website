import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
// import 'bootstrap/dist/css/bootstrap.min.css';
import {  Dropdown, Navbar, Nav } from 'react-bootstrap';
import './my_nav.css'


// import reefhome from './my_home.jsx'


function My_nav() {






    return ( 
    <>
    <div className='bg-white sticky-top'>
        <Navbar className=' container-md d-flex  justify-content-between  '>
            
            <Nav.Link className='ss nav_bard'>Awesome</Nav.Link>
            
                <Nav className=' d-md-flex  d-none ms-5 '>
                
                    <Nav.Link >HOME </Nav.Link>
                    <Nav.Link >ABOUT </Nav.Link>               
                    <Nav.Link >TEAM </Nav.Link>
                    <Nav.Link >SERVICE</Nav.Link>
                    <Nav.Link >PORTOFOLIO</Nav.Link>
                    <Nav.Link >CONTACT</Nav.Link>
                </Nav>
            
            <Dropdown  className=' d-sm-block d-md-none'>
                <Dropdown.Toggle className='icon '  >
                    <FontAwesomeIcon icon={faBars} size="xl" style={{color: "#91989c",}} />   
                </Dropdown.Toggle>
                <Dropdown.Menu className='dropdown-menu-end dropdown-menu-start ddm container' >
                    <Dropdown.Item  href="#/action-1">HOME</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">ABOUT</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">TEAM</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">SERVICE</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">PORTOFOLIO</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">CONTACT</Dropdown.Item>
                    
                </Dropdown.Menu>
            </Dropdown>
        </Navbar>
    </div>
    </>
    );
}

export default My_nav 