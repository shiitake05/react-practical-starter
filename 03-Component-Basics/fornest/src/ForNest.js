import ForItem from './ForItem';

// リスト全体を管理
export default function ForNest({ src }) {
  return (
    <dl>
      {src.map(elem =>
        <ForItem book={elem} key={elem.isbn} />
      )}
    </dl>
  );
}