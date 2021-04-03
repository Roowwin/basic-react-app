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
            list:action.payload,
            msg:"Successfully , got the adverisement",
        }
      }
      case NEWS_LOADER:{
        return {
            ...state ,
            loading:true,
            msg:"",
        }
      }
      case GET_ARTICLE_LIST_ERR:{
        return {
            ...state ,
            err:action.payload,
            msg:"Sorry , can't display adverisement",
        }
      }
      
      default:
        return state;
    }
  }