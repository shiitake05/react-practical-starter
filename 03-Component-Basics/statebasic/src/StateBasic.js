import { useState } from 'react';

export default function StateBasic({ init }) {
  const [count, setCount] = useState(init);
  console.log(`count is ${count}.`);  // stateではクリックのたびにコンソールのログが追加される。これは関数コンポーネントが再実行されていることを示す。
  // const handleClick = () => setCount(count + 1);

  // setCountの呼び出しの回数にかかわらず、1つずづしか増えない
  // Stateの更新は非同期で行われるため、setCountが呼び出された時点でのcountの値が使われる
  // const handleClick = () => {
  //   setCount(count + 1);
  //   setCount(count + 1);
  // };

  // 以下のように記述することで上記の問題を解決できる
  const handleClick = () => {
    setCount(b => b + 1);
    setCount(b => b + 1);
  };
  return (
    <>
      <button onClick={handleClick}>カウント</button>
      <p>{count}回、クリックされました。</p>
    </>
  );
}