import {
    GET_ARTICLE_LIST, 
    GET_ARTICLE_LIST_ERR, 
    NEWS_LOADER,
    GET_AD_LIST ,
  GET_AD_LIST_ERR ,
  AD_LOADER
   
} from "../types";



import axios from 'axios';






export const getArticleList = (skip =0 , limit=4) => dispatch => {
    dispatch(newsLoader());
    axios
      .get('/api/newspaper/list' , 
      {
        headers:{
          skip:skip , 
          limit:limit
        }
      },
      )
      .then(res => {
       
        dispatch({
          type: GET_ARTICLE_LIST,
          payload: res.data
        });
       
      })
      .catch(err =>
        dispatch({
          type:GET_ARTICLE_LIST_ERR ,
          payload: err.response
        })
      );
  }

const newsLoader = (val = null)=>{
    return { 
        type:NEWS_LOADER, 
        payload:null
    }
}
export const getAdveritsementList = () => dispatch => {
    dispatch(addLoader());
    axios
      .get('/api/promotion/list' )
      .then(res => {
        console.log('the response is' , res);
        dispatch({
          type: GET_AD_LIST,
          payload: res.data
        });
       
      })
      .catch(err =>
        dispatch({
          type:GET_AD_LIST_ERR ,
          payload: err.response
        })
      );
  }

const addLoader = (val = null)=>{
    return { 
        type:AD_LOADER, 
        payload:null
    }
}