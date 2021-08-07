import { createStore } from 'vuex'


const store = createStore({
  state: {
      picsInfo:[
          {
            title:'hoge',
            text:'hoge_text',
            img: '../assets/topmain.jpeg',
          },
          {
            title:'foo',
            text:'foo_text',
            img:'./assets/topmain.jpeg',
          },
          {
            title:'bar',
            text:'bar_text',
            img:'./assets/topmain.jpeg',
          },
      ],
      hoge:'Hogeeeee!',
  },
  mutations: {
    changeHoge(state, changeText) {
      state.hoge = changeText
    },
  }
  // actions: {},
  // getters: {},
  // modules: {},
})

export default store