/* eslint-disable */

import logo from './logo.svg';
import React,{useState} from 'react';
import { Navbar,Container,Nav,NavDropdown,Button } from 'react-bootstrap';
import './App.css';
import Data from './data.js';

import { Link, Route, Switch } from 'react-router-dom';
import Detail from './Detail.js';

function App() {

  let [shoes,shoes변경] = useState(Data);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">ShoesShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link ><Link to="/">Home</Link></Nav.Link>
              <Nav.Link ><Link to="/detail">Detail</Link></Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      <Switch>
        <Route exact path="/"> 
          
          <Jumbotron></Jumbotron>
          <div className="container">
            <div className="row">
              {
                shoes.map((v,i)=>{
                  return (
                    <Card shoes={v} i={i}></Card>
                  )
                })
              }
            </div>
          </div>

        </Route>
        <Route path="/detail/:id">
          <Detail shoes={ shoes }></Detail>
        </Route>

        <Route path="/:id">
          <div>ㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁㅁ</div>
        </Route>

      {/* <Route path="/어쩌구" component={ Modal }></Route> */}
      </Switch>
    </div>
  );
}



function Card(props,key){
  let src1 = "https://codingapple1.github.io/shop/shoes"+(props.i+1)+".jpg"
  return(
    <div className="col-md-4">
      <img src={ src1 } width="100%"></img>
      <h4>{ props.shoes.title }</h4>
      <p>{ props.shoes.content } & { props.shoes.price } </p>
    </div>
  )
}

function Jumbotron(){
  return(
    <div className="background">
      <h1>20% Season Off</h1>
      <p>
        abcdefghijklmnopqrstuoooooooooooooooooooo
      </p>
      <p>
        <Button variant="primary">Learn more</Button>
      </p>
    </div>
  )
}

export default App;
