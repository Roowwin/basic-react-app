import {
  GET_AD_LIST ,
  GET_AD_LIST_ERR ,
  AD_LOADER
} from "../../types";



  const initialState = {
        list:[],
        err:null,
        msg:'',

  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case GET_AD_LIST:{
        return {
            ...state ,
            err:null,
            loading:false,
            list:action.payload,
            msg:"Successfully , got the adverisement",
        }
      }
      case AD_LOADER:{
        return {
            ...state ,
            loading:true,
            err:null,
            msg:"",
        }
      }
      case GET_AD_LIST_ERR:{
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
  