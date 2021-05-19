import {Container, Row, Col} from "react-bootstrap";

import HudToolBar from "./components/Hud/ToolBar/ToolBar.js";
import SideBarMenu from "./components/Hud/SideBarMenu/SideBarMenu.js";
import './App.css';

function App() {
  return (
    <div className="App">
      <Container fluid >
        <Row>
          <Col className = "HudContainer" sm={3} xs={4} md={2} lg={2} xl={2} >  
            <SideBarMenu/>
          </Col>
          <Col className = "HudContainer contenidoYhud" sm={9} xs={8} md={10} lg={10} xl={10}>
              <HudToolBar/>

              <Row>
                <Col  xs={10}>
                    Contenido
                </Col> 
              </Row>
            </Col>

          
        </Row>

      </Container>
      
    </div>
  );
}

export default App;