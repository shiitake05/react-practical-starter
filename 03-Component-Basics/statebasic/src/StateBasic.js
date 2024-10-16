import { useState } from 'react';

export default function StateBasic({ init }) {
  const [count, setCount] = useState(init);
  console.log(`count is ${count}.`);  // stateではクリックのたびにコンソールのログが追加される。これは関数コンポーネントが再実行されていることを示す。
  // const handleClick = () => setCount(count + 1);

  const handleClick = () => {
    setCount(count + 1);
    setCount(count + 1);
  };

  // const handleClick = () => {
  //   setCount(c => c + 1);
  //   setCount(c => c + 1);
  // };
  return (
    <>
      <button onClick={handleClick}>カウント</button>
      <p>{count}回、クリックされました。</p>
    </>
  );
}