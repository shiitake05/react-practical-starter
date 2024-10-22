import { useState } from 'react';

export default function EventMouse({ beforeSrc, afterSrc, clickSrc, alt }) {
  const [current, setCurrent] = useState(beforeSrc);
  const handleEnter = () => setCurrent(afterSrc);
  const handleLeave = () => setCurrent(beforeSrc);
  const handleClick = () => setCurrent(clickSrc);
  return (
    <img src={current} alt={alt}
      onMouseEnter={handleEnter} onMouseLeave={handleLeave} onClick={handleClick} />
  );
}