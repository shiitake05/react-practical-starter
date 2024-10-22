import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import EventMouse from './EventMouse';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <EventMouse
    alt="ロゴ画像"
    beforeSrc="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi2mJj1fs-rUE6cZpZXNDh6guwRT6zO3KvmJFahgzVAl-0MHYW6v09eOyeo6DY7vV5DF_DL0tdYZZQeUw6lS6VdgP4BhgUGefjsRAKQp_oDoCjEEpKq2TnWm8FZHg1XrS4PvNxcu5kqwArE/s450/space_uchu_bouenkyou_bg.png"
    afterSrc="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjz3vD4P5zToiLsKC7gfJ1yEd5ZT-LVlw6NfK9lUMWD15aD13kwWYzKFLPaEQgGjBLpcbqvWh431M20Kc-eAILiCrPfvEnJS-k1Ijuzp5rck5Ebuz9wJ8PXjekw93xqx6vcRyDXKrgPMGcN/s450/music_gakufu_open.png"
    clickSrc="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg6ibDVakAmlv49EzhBbXitg-M4WsOufExovKV-wmoJVGcTefLSmzmzXIstSr8s1zOs9E_Q0gW0OYE1hfhfTjBBWPNJ1ry9NCEh4cjLRihfllO-Uou2SvhyphenhyphenNKNjb7Myc8ODp-5mQhCjn_oS/s400/chikyuu_earth_danmenzu.png"  />
);

reportWebVitals();
