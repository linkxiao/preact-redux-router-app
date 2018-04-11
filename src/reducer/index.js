/**
 * @file The file of reducer for combineReducers
 * @author linkxiao(linkxiao@icloud.com)
 * @dete 2018/03/20
 */

 import { combineReducers } from 'redux';
 import {profileReducer} from './profile';
 import {aboutReducer} from './about';
 import {contactReducer} from './contact';


let headerData = (state = {}) => state;
let sideData = (state = {}) => state;
let contentData = (state = {}) => state;

export const initStore = function(res) {
  //alert("res.data.contentData:" + JSON.stringify(res.data.contentData));
  let contactData = {
      data: res.data.contactData
  };
  const initState = {
      loading: true,
      user: null,
      initData: res.data.contactData
  }
  return {
      headerData: res.data.headerData,
      sideData: res.data.sideData,
      contentData: res.data.contentData
      //contactReducer:res.data.contactData
  }
}

export default combineReducers({
    headerData,
    sideData,
    contentData,
    profileReducer,
    aboutReducer,
    contactReducer
})
