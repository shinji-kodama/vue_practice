import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
  state: {
    questions: [
      {
        id: 1,
        title: "map, reduce探求",
        text: "map, reduceについて一緒に探求しよう！",
        guest: "しんじさん",
      },
      {
        id: 2,
        title: "バイク講座",
        text: "バイクの乗り方から絶景ポイントまでご紹介！",
        guest: "しんじさん",
      },
      {
        id: 3,
        title: "鉄の合成体験",
        text: "オリジナル鉄の作成をサポートします！",
        guest: "しんじさん",
      },
      {
        id: 4,
        title: "特別企画！",
        text: "内容は申し込んでからのお楽しみです",
        guest: "なかたくさん",
      },
      {
        id: 5,
        title: "クライミングについて学ぼう！",
        text: "特別ゲストとしてバードさんにきていただきます！",
        guest: "バードさん",
      },
      {
        id: 6,
        title: "人生を変える早起きの法則",
        text: "ゲストにイマムさんをお呼びします！",
        guest: "イマムさん",
      },
    ],
    guestName: "",
  },
  mutations: {
    // @param: 検索時に入力した値
    // @return: guestNameに格納
    selectGuest(state, name) {
      state.guestName = name;
    },
    setMovies: function(state, movs) {
      state.movies = movs;
    },
  },
  actions: {
    getMovies: function({commit}){
      return axios.get
      ("https://api.themoviedb.org/3/movie/now_playing?api_key=" + VUE_APP_TMDM_API_KEY)
      .then(res => { commit("setMovies", res.data.results) })
    }
  },
  getters: {
    // @param: なし
    // @return: questions配列のguest名の重複を排除した要素を表示。
    guestNames: (state) => {
      const guestArray = state.questions.map((el) => el.guest);
      return new Set(guestArray);
    },

    // @param: 検索フォームに入力された値
    // @return: questions配列の中の部分条件一致した要素を表示
    filterdGuests: (state) => (guestName) => {
      return state.questions.filter((el) => !el.guest.indexOf(guestName));
    },

    showMovies(state) {
      return state.movies.data;
    },
  },
  // modules: {},
});

export default store;
