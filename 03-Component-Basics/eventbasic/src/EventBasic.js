export default function EventBasic({ type }) {
  // clickイベントハンドラー
  const current = () => {
    const d = new Date();
    switch(type) {
      case 'date':
        console.log(d.toLocaleDateString());
        break;
      case 'time':
        console.log(d.toLocaleTimeString());
        break;
      default:
        console.log(d.toLocaleString());
        break;
    }
  };

  return (
    <div>
      <button onClick={current}>現在時刻または日付を取得</button>
    </div>
  );
}