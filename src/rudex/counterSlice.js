// slice専用ファイル　State、Reducer、ActionCreate三つ揃ったもの
import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  // 初期値は０
  initialState: {
    value: 0,
  },
  // ステートの状態を更新するための関数
  reducers: {
    incrment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrmentByAmount: (state, action) => {
      state.value += action.payload; //2, 10などinputに入力する値によって増加量が変わる
    },
  },
});

// viewに受け渡すためにexportしてあげる
//カウント＋１、−１の動きをいろんなコンポーネントに共有できる状態にしてあげる

export const { incrment, decrement, incrmentByAmount } = counterSlice.actions;
export default counterSlice.reducer;

// 要するにuseStateを共有？することができるってことなのか！？
// 不要な再レンダリング防止ができるんじゃないか！？
