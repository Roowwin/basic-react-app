import {
   GET_ARTICLE_LIST ,
   GET_ARTICLE_LIST_ERR ,
   NEWS_LOADER
} from "../../types";



  const initialState = {
        list:[],
        err:null,
        msg:'',

  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case GET_ARTICLE_LIST:{
        return {
            ...state ,
            loading:false,
            err:null,
            list:action.payload,
            msg:"Successfully , got the articles",
        }
      }
      case NEWS_LOADER:{
        return {
            ...state ,
            loading:true,
            err:null,
            msg:"",
        }
      }
      case GET_ARTICLE_LIST_ERR:{
        return {
            ...state ,
            err:action.payload,
            msg:"Sorry , can't display articles",
        }
      }
      
      default:
        return state;
    }
  }