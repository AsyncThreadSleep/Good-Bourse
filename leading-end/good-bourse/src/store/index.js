import { createStore } from 'vuex'
import config from '@/assets/config/config.json'

export default createStore({
  state: {
    api: {
      github: config.API_URL.github
    },
    author: {
      name: config.author.name
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
