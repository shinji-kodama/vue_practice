import { createStore } from 'vuex'

const moduleMsgs = {
  state: {
    msgs: [{
      id:1,
      name:'けいた',
      hobby:'サッカー',
      txt:'foo',
      indicate: true,
      intro: true,
      img: '@/assets/keita.png'
    },{
      id:2,
      name:'バード',
      hobby:'クライミング',
      txt:'bar',
      indicate: true,
      intro: true,
      img: '@/assets/bird.png'
    },{
      id:3,
      name:'いまむー',
      hobby:'言語習得(analog)',
      txt:'hogehoge',
      indicate: true,
      intro: true,
      img: '@/assets/imamu.png'
    },{
      id:4,
      name:'なかたく',
      hobby:'言語習得(degital)',
      txt:'hogeeeee',
      indicate: false,
      intro: true,
      img: '@/assets/nakataku.png'
    },{
      id:5,
      name:'こたま',
      hobby:'自宅警備',
      txt:'foobar',
      indicate: false,
      intro: true,
      img: '@/assets/kotama.jpg'
    }],
  },
  mutations: {
    changeIndicate(state, msgId){
      const target = state.msgs.find(msg => msg.id === msgId)
      target.indicate = !target.indicate
    },
    showIntro(state, msgId){
      state.msgs.forEach(msg => msg.id === msgId ? msg.intro = true : msg.intro = false)
      console.log(state.msgs)
    }
  },
  getters: {
    selectMsgs: state => {
      return state.msgs.filter(msg => msg.indicate)
    },
    hiddenMsgs: state => {
      return state.msgs.filter(msg => !msg.indicate)
    },
    selectIntro: state => {
      return state.msgs.filter(msg => msg.intro)
    },
    // showImg: state => {
    //   return require(state.msgs.filter(msg => msg.intro).img)
    // }
  },
}

const moduleHoge = {
  state: {
    hoge: 'Hogeeeeeee',
    ahaha: 'Ahahahahaha'
  },
  mutations: {
    changeHoge(state, changeText){
      state.hoge = changeText
    },
    changeAhaha(state, changeTxt){
      state.ahaha = changeTxt
    },
  }
}

const store = createStore({
  // state: {
  //   hoge: 'Hogeeeeeee',
  //   ahaha: 'Ahahahahaha'
  // },
  // mutations: {
  //   changeHoge(state, changeText){
  //     state.hoge = changeText
  //   },
  //   changeAhaha(state, changeTxt){
  //     state.ahaha = changeTxt
  //   },
  // },
  modules: {
    a: moduleMsgs,
    b: moduleHoge
  },
})

store.state.a
store.state.b

export default store