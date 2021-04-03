
import React, { Component } from "react";


import { Container} from 'react-bootstrap';

class Footer extends Component {
   
    componentDidMount(){
       
        // console.log('path name is ' , this.props.location.pathname);
    }
    
    
    componentWillUnmount(){

    }
   
    render(){
 
        return(
            <footer className="bg-light mt-4 py-4">
                <Container>
                 <p className="mb-0">&copy;2020 <span className="text-muted">All right Reserved</span>. <span className="float-right">Made with <i className="text-danger fa fa-heart"></i> by <a href="https://github.com/snj-adhikari" target="blank">Sanjay Adhikari </a>  </span>
                </p>
                </Container>
            </footer>
        )
    }
}


export default Footer;

