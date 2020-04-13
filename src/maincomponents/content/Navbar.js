import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignLeft } from '@fortawesome/free-solid-svg-icons';
import { Navbar, Button, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { FaSignOutAlt } from 'react-icons/fa';

export default props => {

  const [isOpen, setOpen] = useState(true)
  const toggle = () => setOpen(!isOpen)
  
  return (
    <Navbar color="light" light className="navbar shadow-sm p-3 mb-5 bg-white rounded" expand="md">
      <Button color="info" onClick={props.toggle}>
        <FontAwesomeIcon icon={faAlignLeft}/>
      </Button>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
           <Button color="info" style={{height:"40px",padding:"1px 5px"}}><NavLink style={{color:"white"}}  href={'/'}><span><FaSignOutAlt /></span> Sign Out</NavLink></Button>
          </NavItem>
         
      </Nav>
      </Collapse>
    </Navbar>
  );
}
