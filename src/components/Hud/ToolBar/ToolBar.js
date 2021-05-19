import React from "react";
import Nav from "react-bootstrap/Nav";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import './ToolBar.css';

//const menu = props => {
   
const HudToolBar = () =>{
    return (
        <Nav id="HudToolBar" activeKey="/home" onSelect={(selectedKey) => alert(`selected ${selectedKey}`)} as="ul">
            <Nav.Item>
                <Nav.Link href="/home"><FontAwesomeIcon icon={faBars} /></Nav.Link>
            </Nav.Item>
            
            <Nav.Item>
                <Nav.Link eventKey="disabled" disabled id='toolbar-nombre-empresa'> 
                    Nombre de la empresa
                </Nav.Link>
            </Nav.Item>

            <Nav.Item id='toolbar-cerrar-sesion' className='ml-auto'>
                <Nav.Link > 
                    <FontAwesomeIcon icon={faSignOutAlt} />
                </Nav.Link>
            </Nav.Item>
            </Nav>
        );
  } 
  //const Hud = withRouter(menu);
  export default HudToolBar;