import {
    CHANGE_HEADER_LINK
} from '../actions/types';
const DEAFAULT_STATE={
    links:{
        home:true,
        aboutUs:false, 
        contactUs:false,
    } 
   }

export default(state=DEAFAULT_STATE, action)=>{
switch(action.type){
    case  CHANGE_HEADER_LINK:
    return { ...state, links:action.payload}
    
    default: return state
}

}