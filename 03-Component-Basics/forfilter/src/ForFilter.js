import React from 'react';

// filterメソッドでリストを絞り込む
export default function ForFilter({ src }) {
  const lowPrice = src.filter(book => book.price < 3500);   // 3500円未満の書籍を抽出
  return (
  <dl>
    {lowPrice.map(elem => (
      <React.Fragment key={elem.isbn}>
        <dt>
          <a href={`https://wings.msn.to/books/${elem.isbn}/${elem.isbn}.jpg`}>
              {elem.title}（{elem.price}円）
          </a>
        </dt>
        <dd>{elem.summary}</dd>
      </React.Fragment>
    ))}
  </dl>
  );
}