
import React, { Component } from "react";

// Bootstrap Component
import {  Navbar} from 'react-bootstrap';


class Header extends Component {
    
    componentDidMount(){
       
       
    }
    
    
    componentWillUnmount(){

    }
   
    render(){
     
        return(
            <header >
                <Navbar fixed="top" collapseOnSelect expand="lg" bg="secondary" variant="dark">
                    <Navbar.Brand  className="ml-auto mr-auto" href="#home">React-Bootstrap</Navbar.Brand>
            
                </Navbar> 
          </header>
        )
    }
}


export default Header;

