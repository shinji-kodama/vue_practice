import { createStore } from "vuex";

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
        text: "ゲストにイマムをお呼びします！",
        guest: "イマムさん",
      },
    ],
  },
  mutations: {},
  // actions: {},
  getters: {
    duplicateNameRemove: state => {
      return state.questions.from(new Set(state.questions));
    }
  },
  // modules: {},
});

export default store;
