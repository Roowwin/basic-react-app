
import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

// Bootstrap
import { Container ,Row , Col } from 'react-bootstrap';

//Importing component 
import Listing from '../components/article/Listing';
import Advertisement from '../components/sidebar/Advertisement';
import Spinner from '../global/Spinner';

// Importing API call
import {
    getArticleList , 
    getAdveritsementList
} from "../redux/actions/apicall";

class Home extends Component {
    constructor(props){
        super(props);

        this.state = {
            currentPage:1,
            limit:4,

        }
       
    }
    componentDidMount(){
       this.props.getAdveritsementList();
       this.props.getArticleList();
        // console.log('path name is ' , this.props.location.pathname);
    }
    
    
    componentWillUnmount(){

    }
   
    render(){
        const {article , ads} =this.props;
        // console.log("this props in home is" , this.props);
        return (
        <div className="home-page">
            <Container >
                <Row className="flex-md-row-reverse ">
                    <Col xs={12} md={3} >
                        {ads.loading ?(
                          <Spinner/> 

                        ):
                        (
                           <Advertisement {...ads}/>
                        )

                        }
                        
                    </Col>
                    <Col xs={12} md={9} >
                        {article.loading ?(
                            <Spinner/>
                        ):(
                            <Listing {...article}/>

                        )}
                    </Col>
                    
                </Row>
            
            </Container>
        </div>
        );
    }
}

const mapStateToProps = state => ({
    article: state.article,
    ads:state.ads,

  });
  export default connect(
    mapStateToProps,
    {
        getAdveritsementList,
        getArticleList
    }
  )(withRouter(Home));
  