import React, { Component } from 'react';
import './styles.css';
import Dropdown from 'react-bootstrap/Dropdown'
import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Canvas from './canvas'

class CanvasPage extends Component {
  constructor(props) {
    super(props);
    this.state = { Images:[
      "https://bigvu-interviews-assets.s3.amazonaws.com/images/Daisi.png",
      "https://bigvu-interviews-assets.s3.amazonaws.com/images/Shiri.png",
      "https://bigvu-interviews-assets.s3.amazonaws.com/images/Sarha.png",
      "https://bigvu-interviews-assets.s3.amazonaws.com/images/Rivka.png",
      "https://bigvu-interviews-assets.s3.amazonaws.com/images/Noa.png",
      "https://bigvu-interviews-assets.s3.amazonaws.com/images/Erika.png",
      "https://bigvu-interviews-assets.s3.amazonaws.com/images/Eli.png"
      ],
      index:7,
      displayText : '',
      test: '',
      color : this.props.colorData,
      
    }
  } 
    myChangeHandler = (event) => {
      this.setState({displayText: event.target.value});
      console.log(this.state.color);
    }
    
    render() { 
        return (
            <body className = "body">
               
                <div>
                    <Navbar bg="primary" variant="dark">
                        <Navbar.Brand href="#home"></Navbar.Brand>
                        <Nav>
                            <Nav.Link className="separatebtns" href="white">White</Nav.Link>
                            <Nav.Link className="separatebtns2" href="blue">Blue</Nav.Link>
                               
                        </Nav>
                    </Navbar>
                    
                </div>
                <div class="Row">
                    <div class="Column">
                        <input type="text" placeholder="Display Text" onChange={this.myChangeHandler}></input>
                    </div>
                    <div class="Column">
                    <Dropdown>
                        <Dropdown.Toggle variant="light" id="dropdown-basic">
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={this.handleDaisi}>Daisi</Dropdown.Item>
                            <Dropdown.Item onClick={this.handleShiri}>Shiri</Dropdown.Item>
                            <Dropdown.Item onClick={this.handleSarha}>Sarha</Dropdown.Item>
                            <Dropdown.Item onClick={this.handleRivka}>Rivka</Dropdown.Item>
                            <Dropdown.Item onClick={this.handleNoa}>Noa</Dropdown.Item>
                            <Dropdown.Item onClick={this.handleErika}>Erika</Dropdown.Item>
                            <Dropdown.Item onClick={this.handleEli}>Eli</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    </div>
                </div>
                <div class="canvas-sizing">
                  <Canvas index={this.state.Images[this.state.index]} colorData = {this.state.color}/> 
                </div>
                <div>
                    <div>
                      <br>
                      </br>
                    <div class = "divmid">
                      <h1 class="inner-text">{this.state.displayText}</h1>
                    </div>
                    </div>
                </div>
                <img class = "logo" src="https://bigvu.tv/img/logo.svg"/>
            </body>           
          );
    }
    handleDaisi = () =>{
        this.setState({index :0})
    }
    handleShiri= () =>{
        this.setState({index :1})
    }
    handleSarha= () =>{
        this.setState({index :2})
    }
    handleRivka= () =>{
        this.setState({index :3})
    }
    handleNoa= () =>{
        this.setState({index :4})
    }
    handleErika= () =>{
        this.setState({index :5})
    }
    handleEli= () =>{
        this.setState({index :6})
    } 
}
 
export default CanvasPage;


