import { useState } from 'react';
import StateCounter from './StateCounter';

export default function StateParent(init) {
  const [count, setCount] = useState(0);        // countを初期化
  const update = step => setCount(c => c + step);   // update関数を定義
  return (
  <>
    {/* update関数をStateCounterコンポーネントに渡す */}
    <p>総カウント：{count}</p>
    <StateCounter step={1} onUpdate={update} />
    <StateCounter step={5} onUpdate={update} />
    <StateCounter step={-1} onUpdate={update} />
  </>
  );
}