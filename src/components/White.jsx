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
import CanvasPage from './CanvasPage'

class White extends Component {
  constructor(props) {
    super(props);
    this.state = { color : "white" }
  } 
    

    render() { 
        return (
            <CanvasPage colorData = {this.state.color}/>          
          );
    }
}
 
export default White;


