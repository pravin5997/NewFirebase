import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBriefcase, faPaperPlane, faQuestion, faImage, faCopy } from '@fortawesome/free-solid-svg-icons';
import SubMenu from './SubMenu';
import { NavItem, NavLink, Nav } from 'reactstrap';
import classNames from 'classnames';
import {Link} from 'react-router-dom';
import { FaChartBar } from 'react-icons/fa';
import { FaWpforms } from 'react-icons/fa';
import { FaTable } from 'react-icons/fa';


const SideBar = props => (
    <div className={classNames('sidebar', {'is-open': props.isOpen})}>
      <div className="sidebar-header">
        <span color="info" onClick={props.toggle} style={{color: '#fff'}}>&times;</span>
        <h3><img src="https://www.nividata.com/wp-content/uploads/2017/07/nividata_white-1.png" style={{height:"50px",width:"150px"}}></img></h3>
      </div>
      <div className="side-menu">
        <Nav vertical className="list-unstyled pb-3">
          {/* <SubMenu title="Home" icon={faHome} items={submenus[0]}/> */}
          <NavItem>
              
            <NavLink tag={Link} to={'/admin/addadmin'}>
            {/* icon={faBriefcase} */}
              <FaWpforms  className="mr-2" />Add Admin
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to={'/admin'}> 
           <FaTable className="mr-2"/> Table
            </NavLink>
          </NavItem>
          {/* <NavItem>
            <NavLink tag={Link} to={'/admin'}> */}
            {/* icon={faImage} */}
          {/* <FaChartBar className="mr-2"/>Chart
            </NavLink>
          </NavItem>
           <NavItem>
            <NavLink tag={Link} to={'/admin/usertable'}> */}
            {/* icon={faQuestion} */}
              {/* <FaTable  className="mr-2"/>User Table
            </NavLink>
           </NavItem>  */}
          {/* <NavItem> 
            <NavLink tag={Link} to={'/contact'}>
              <FontAwesomeIcon icon={faPaperPlane} className="mr-2"/>Contact
            </NavLink>
          </NavItem> */}
        </Nav>        
      </div>
    </div>
  );

  // const submenus = [
  //   [
  //     {
  //       title: "Home 1",
  //       target: "Home-1"
  //     },
  //     {
  //       title: "Home 2",
  //       target: "Home-2",        
  //     },
  //     {
  //       itle: "Home 3",
  //       target: "Home-3",      
  //     }
  //   ],
  //   [
  //     {
  //       title: "Page 1",
  //       target: "Page-1",          
  //     },
  //     {
  //       title: "Page 2",
  //       target: "Page-2",        
  //     }
  //   ]
  // ]
  

export default SideBar;
