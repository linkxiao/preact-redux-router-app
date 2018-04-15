/**
 * @file The file of reducer for combineReducers
 * @author linkxiao(linkxiao@icloud.com)
 * @dete 2018/03/20
 */

 import { combineReducers } from 'redux';
 import { profileReducer } from './profile';
 import { about } from './about';
 import { contact } from './contact';
 import { active } from './active';


let headerData = (state = {}) => state;
let sideData = (state = {}) => state;
let contentData = (state = {}) => state;
// let contactData = (state = {}) => state;
//let activeData = (state = {}) => state;


export const initStore = function(res) {
  return {
      contactData: contact.init(res.data),
      //activeData: active.init(res.data),
      headerData: res.data.headerData,
      sideData: res.data.sideData,
      contentData: res.data.contentData
  }

}




export default combineReducers({
    contactData: contact.reducer,
    //activeData,
    about,
    headerData,
    sideData,
    contentData,
    profileReducer
})
