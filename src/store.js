import Vue from 'vue'
import Vuex from 'vuex'
import Cookies from 'js-cookie'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sidebar: {
      opened: Cookies.get('sidebarStatus'),
    }
  },
  mutations: {
    TOGGLE_SIDEBAR (state) {
      console.log(state.sidebar.opened);
      state.sidebar.opened = !state.sidebar.opened;
    },
    OPEN_SIDEBAR (state) {
      state.sidebar.opened = true;
    },
    CLOSE_SIDEBAR (state) {
      state.sidebar.opened = false;
    }
  },
  actions: {

  }
})
