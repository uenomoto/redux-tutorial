//＊ 今回の場合は、カウントの値の状態管理をしているお店的なイメージ。
// この状態管理はどのコンポーネントでも使えるようにしたいそのためには
// 一番上の親コンポーネントにインポートする必要がある！！

import { configureStore } from "@reduxjs/toolkit";
import conuterReducer from "./counterSlice";

export const store = configureStore({
  reducer: {
    cunter: conuterReducer,
  },
});
