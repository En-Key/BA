import React from 'react';
import { Section } from 'shared/components/Section';
import { mapPoints } from 'shared/mocks/mapPoints';
import s from './sights.module.css';

export const Sights = () => {
  return (
    <div className={s.container}>
      {/* <h1>Места</h1> */}
      {mapPoints.map((mapPoint, id) => (
        <Section mapPointsData={mapPoint} key={id} />
      ))}
    </div>
  );
};
