export default function EventObj() {
  const handleClick = ev => console.log(ev);  // 「e」または「ev」でイベントオブジェクトを表示
  // const handleClick = () => alert('ボタンがクリックされました');  // クリックされたらアラートを表示
  return (
    <button onClick={handleClick}>クリック</button>
  );
}