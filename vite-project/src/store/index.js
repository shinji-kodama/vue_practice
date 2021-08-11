import { createStore } from 'vuex'


const store = createStore({
  state: {
    idNumber:0,
    profile: {
      id:Number,
      name: String,
      comment:String,
    },
    profiles: [
      {
        id:1,
        name: "asasas",
        comment:"xxxxxxx",
      },
      {
        id:2,
        name: "asasas",
        comment:"xxxxxxx",
      },
      {
        id:3,
        name: "asasas",
        comment:"xxxxxxx",
      },
      {
        id:4,
        name: "asasas",
        comment:"xxxxxxx",
      },
      {
        id:5,
        name: "asasas",
        comment:"xxxxxxx",
      },
      {
        id:6,
        name: "apopopas",
        comment:"xxxxxxx",
      },
      {
        id:7,
        name: "apsssssas",
        comment:"xxxxxxx",
      },
      {
        id:9,
        name: "apsssssas",
        comment:"xxxxxxx",
      },
      {
        id:10,
        name: "apsssssas",
        comment:"xxxxxxx",
      },
      {
        id:11,
        name: "asauuusas",
        comment:"xxxxxxx",
      },
      {
        id:12,
        name: "nnnnasasas",
        comment:"xxxxxxx",
      },
      {
        id:13,
        name: "asasas",
        comment:"xxxxxxx",
      },
      {
        id:14,
        name: "asassssas",
        comment:"xxxxxxx",
      },
      {
        id:15,
        name: "asasas",
        comment:"xxxxxxx",
      },
      {
        id:16,
        name: "bbbbbbbbapopopas",
        comment:"xxxxxxx",
      },
      {
        id:17,
        name: "apssshihsihissas",
        comment:"xxxxxxx",
      },
      {
        id:19,
        name: "apsssuuuuuuuussas",
        comment:"xxxxxxx",
      },
      {
        id:20,
        name: "apsssssas",
        comment:"xxxxxxx",
      },
    ],
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
