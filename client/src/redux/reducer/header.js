import {
    CHANGE_HEADER_LINK
} from '../actions/types';

let url = window.location.pathname

const DEAFAULT_STATE={
    links:{
        home:url === "/"?true:false,
        aboutUs:url === "/about-us"?true:false, 
        contactUs:url === "/contact"?true:false,
        clubs:url === "/clubs" || url === "/sciences" || url === "/mental-arithmetic" || url === "/agriculture" || url === "/entrepreneurship" ?true:false,
        stories:url.slice(0,8) === "/stories"?true:false,
    } 
   }

export default(state=DEAFAULT_STATE, action)=>{
switch(action.type){
    case  CHANGE_HEADER_LINK:
    return { ...state, links:action.payload}
    
    default: return state
}

}