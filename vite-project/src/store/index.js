import { createStore } from 'vuex'


const store = createStore({
  state: {
      picsInfo:[
          {
            title:'hoge',
            text:'hoge_text',
            img:'hoge_pics',
          },
          {
            title:'foo',
            text:'foo_text',
            img:'foo_pics',
          },
          {
            title:'bar',
            text:'bar_text',
            img:'bar_pics',
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