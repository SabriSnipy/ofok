import {CHANGE_HEADER_LINK} from "./types";

export const CHANGEHEADERLINK = (links) =>{
    return dispatch => {
        dispatch({type:CHANGE_HEADER_LINK, payload : links})
    }
}