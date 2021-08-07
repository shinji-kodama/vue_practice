import { createStore } from 'vuex'


const store = createStore({
  state: {
    category:'',
    images:[
        {
            index:1,
            src:'../public/jimmy_01.jpeg',
            category:'Jimmy'

        },
        {
            index:2,
            src:'../public/jimmy_02.jpeg',
            category:'Jimmy'

        },
        {
            index:3,
            src:'../public/jimmy_03.jpeg',
            category:'Jimmy'

        },
        {
            index:4,
            src:'../public/jimmy_04.jpeg',
            category:'Jimmy'

        },
        {
            index:5,
            src:'../public/jimmy_05.jpeg',
            category:'Jimmy'

        },
        {
            index:6,
            src:'../public/renan_01.jpeg',
            category:'Renan'

        },
        {
            index:7,
            src:'../public/renan_02.jpeg',
            category:'Renan'

        },
        {
            index:8,
            src:'../public/renan_03.jpeg',
            category:'Renan'

        },
        {
            index:9,
            src:'../public/renan_04.jpeg',
            category:'Renan'

        },
        {
            index:10,
            src:'../public/renan_05.jpeg',
            category:'Renan'

        },
    ], 
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
  },
  // actions: {},
  getters: {
    selectAll: state =>{
      return state.images.filter(image => image.category != '')
    },
    selectJimmy: state =>{
      return state.images.filter(image => image.category == 'Jimmy')
    },
    selectRenan: state =>{
      return state.images.filter(image => image.category == 'Renan')
    }
  },
  // modules: {},
})

export default store