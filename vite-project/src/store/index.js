import { createStore } from 'vuex'
import firebase from 'firebase'
import 'firebase/firestore';


const store = createStore({
  state: {
    profile: {
      name: String,
      comment:String,
    },
    profiles: [],
    db: firebase.firestore(),
    dbName : "test",
  },
  mutations: {
    addProfiles(state, { subTitleValue1, subTitleValue2 }) {
      state.profile = {
        name     : subTitleValue1,
        comment  : subTitleValue2
      }
      state.db.collection(state.dbName).add(state.profile)
        .then(() => {
          state.profiles.push(state.profile)
          state.idNumber += 1
          state.profile =  {
            name: String,
            comment:String,
          }
        }).catch((e) => {
           alert(e)
        })
    },
  },
  actions: {
     createProfileData() {
        console.log("ok")
        state.db.collection(state.dbName).onSnapshot((querySnapshot) => {
          querySnapshot.docChanges().forEach((doc) => {
            if (doc.type == 'added' || doc.type == 'modified') {
              const profileID = doc.doc.id
              const profileData= doc.doc.data()
              const profile = {
                id: profileID,
                name: profileData.name,
                comment: profileData.comment,
              }
              state.profiles.push(profile)
            } else if (doc.type == 'removed') {
              const idx = state.profiles.findIndex(profile => profile.id === doc.doc.data().id)
              state.profiles.splice(idx, 1)
            }
          })
        })
      },
  },
  getters: {
    showProfiles : (state) => {
      console.log(state.profiles)
      return state.profiles
    }
  },
  // modules: {},
})

export default store
