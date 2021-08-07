import { createStore } from "vuex";

const store = createStore({
  state: {
    questions: [
      {
        id: 1,
        title: "map, reduce探求",
        text: "map, reduceについて一緒に探求しよう！",
      },
      {
        id: 2,
        title: "バイク講座",
        text: "バイクの乗り方から絶景ポイントまでご紹介！",
      },
      {
        id: 3,
        title: "鉄の合成体験",
        text: "オリジナル鉄の作成をサポートします！",
      },
      {
        id: 4,
        title: "特別企画！",
        text: "内容は申し込んでからのお楽しみです",
      },
    ],
  },
  mutations: {

    },
  // actions: {},
  // getters: {},
  // modules: {},
});

export default store;
