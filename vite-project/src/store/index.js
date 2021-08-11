import { createStore } from 'vuex'

// モジュールとして自己紹介部分を切り取り
const moduleMsgs = {
  state: {
    msgs: [{
      id:1,
      name:'けいた',
      hobby:'サッカー',
      txt:'foo',
      indicate: true,
      intro: true,
      img: 'keita.png'
    },{
      id:2,
      name:'バード',
      hobby:'クライミング',
      txt:'bar',
      indicate: true,
      intro: true,
      img: 'bird.png'
    },{
      id:3,
      name:'いまむー',
      hobby:'言語習得(analog)',
      txt:'hogehoge',
      indicate: true,
      intro: true,
      img: 'imamu.png'
    },{
      id:4,
      name:'なかたく',
      hobby:'言語習得(degital)',
      txt:'hogeeeee',
      indicate: false,
      intro: true,
      img: 'nakataku.png'
    },{
      id:5,
      name:'こたま',
      hobby:'自宅警備',
      txt:'foobar',
      indicate: false,
      intro: true,
      img: 'kotama.jpg'
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
    hideMsgs: state => {
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

// モジュールとして切り取ったけど、mapStateが動かない・・・
const moduleHoges = {
  state: {
    hoge: 'hogehoge',
    ahaha: 'Abababa'
  },
  mutations: {
    changeHoge(state, changeText){
      state.hoge = changeText
    },
    changeAhaha(state, changeTxt){
      state.ahaha = changeTxt
    },
  },
}

const store = createStore({
  state: {
  //   hoge: 'Hogeeeeeee',
    ahaha: 'Ahahahahaha'
  },
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
    b: moduleHoges
  },
})

store.state.a
store.state.b

export default store