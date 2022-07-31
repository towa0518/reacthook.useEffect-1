import React, { useState, useEffect } from "react";
import "./styles.css";

const INITIAL_COUNT = 0;

const SampleComponent = () => {
  const [count, setCount] = useState(INITIAL_COUNT);

  // 副作用関数
  const callbackFunction = () => {
    // title を書き換える副作用関数
    document.title = `${count} 回クリックされました`;
  };

  // 状態変数 count に変化があるたびに副作用関数が実行される
  useEffect(callbackFunction, [count]);

  const countIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const countReset = () => {
    setCount(INITIAL_COUNT);
  };

  return (
    <div className="App">
      <button onClick={countIncrement}>+ 1 ボタン</button>
      <button onClick={countReset}>リセット</button>
    </div>
  );
};

export default function App() {
  return <SampleComponent />;
}
