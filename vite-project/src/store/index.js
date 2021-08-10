import { createStore } from 'vuex'


const store = createStore({
  state: {
    idNumber:0,
    profile: {
      id:Number,
      name: String,
      comment:String,
    },
    profiles:[]
  },
  mutations: {
    addProfiles(state, { subTitleValue1, subTitleValue2 }) {
      console.log(subTitleValue1, subTitleValue2)
      state.profile = {
        idNumber : state.idNumber,
        name     : subTitleValue1,
        comment  : subTitleValue2
      }
      state.profiles.push(state.profile)
      state.idNumber += 1
      state.profile =  {
        id:Number,
        name: String,
        comment:String,
      }
      console.log(state.profiles)
    },
  },
  // actions: {},
  getters: {
    showProfiles : (state) => {
      console.log(state.profiles)
      return state.profiles
    }
  },
  // modules: {},
})

export default store
