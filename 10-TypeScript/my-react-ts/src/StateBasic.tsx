// 3-1-4のStateBasic.jsをTypeScriptに書き換えると以下のようになる
import { useState } from 'react';

type StateBasicProps = {
	  init: number;
};

export default function StateBasic({ init }: StateBasicProps) {
  const [count, setCount] = useState(init);
  console.log(`count is ${count}.`);

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