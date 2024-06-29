import React from 'react';

import s from './climate.module.css';

export const Climate = () => {
  return (
    <div className={s.container}>
      <h1 className={s.h1}>Климат</h1>

      <div className={s.svg_wrapper}>
        <svg height="60" width="320" xmlns="http://www.w3.org/2000/svg">
          <rect className={s.shape} height="60" width="320" />
        </svg>
        <div className={s.text}>Климат</div>
      </div>
    </div>
  );
};
