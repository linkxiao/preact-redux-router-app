/**
 * @file The file of action for dispatch
 * @author linkxiao(linkxiao@icloud.com)
 * @dete 2018/03/20
 */
import { GET_LXINFO } from '../lib/const/actionType';

//export default {
const contact = {
      //getLx: (dispatch) => (data) => {//另一种写法:小彤的写法
      getLx: (data) => (dispatch) => {
           console.log("action:data",JSON.stringify(data));
           let dafaultData = {
               loading: false,
               user: null,
               contact: {
                  "name":"chenyang",
                  "phone": "17701321596",
                  "email": "chenyang@163.com"
               }
           }
           alert(JSON.stringify(Object.keys(data)));
           data = Object.keys(data).length ? data : dafaultData;
           dispatch({
              type: GET_LXINFO,
              data: data
           });
      }
}

module.exports = contact;
