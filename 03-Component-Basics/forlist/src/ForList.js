import React from 'react';

// propsで受け取り
export default function ForList({ src }) {
  return (
    // 整形
  <dl>
    {/* この場合、consoleにエラーが出ている */}
    {/* {src.map(elem => (
      <>
        <dt>
          <a href={`https://wings.msn.to/books/${elem.isbn}/${elem.isbn}.jpg`}>
              {elem.title}（{elem.price}円）
          </a>
        </dt>
        <dd>{elem.summary}</dd>
      </>
    ))} */}

    {/* <React.Fragment key={elem.isbn}>とすることでリスト全体を再生成せずに、追加文のみを反映する */}
    {/* {src.map(elem => (
      <React.Fragment key={elem.isbn}>
        <dt>
          <a href={`https://wings.msn.to/books/${elem.isbn}/${elem.isbn}.jpg`}>
              {elem.title}（{elem.price}円）
          </a>
        </dt>
        <dd>{elem.summary}</dd>
      </React.Fragment>
    ))} */}

    {/* 上と同様 */}
    {src.map((elem, index) => (
      <React.Fragment key={index}>
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