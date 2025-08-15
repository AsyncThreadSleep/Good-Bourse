import { createStore } from 'vuex'

export default createStore({
  state: {
    xmlHttpReq: function ({
      method = 'GET',
      url = '',
      async = true,
      header = {
        'Content-Type' : 'application/json'
      }
    }, callback = (resData) => {
      console.log(resData)
    }) {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url, async);
      for(let key in header){
        xhr.setRequestHeader(key,header[key]);
      }
      xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
          callback(xhr.responseText)
        } else {
          console.error('Error:', xhr.statusText);
        }
      };
      xhr.onerror = function () {
        console.error('Request failed');
      };
      xhr.send();
    }
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    
  }
})
