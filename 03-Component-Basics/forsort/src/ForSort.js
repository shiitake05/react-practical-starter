import React from 'react';

// sortメソッドでリストをソート
export default function ForSort({ src }) {
  src.sort((m, n) => m.price - n.price);  // これによって価格昇順(n.price - m.priceにすることで価格降順)
  return (
  <dl>
    {src.map(elem => (
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