import React, { useState } from 'react';
import { Button } from 'shared/components/Button';
import { Card } from 'shared/components/Card';
import { cardData } from 'shared/mocks/data';

import s from './gallery.module.css';

export const Gallery = () => {
  const [cards, setCards] = useState(cardData);
  const cats = ['все', ...new Set(cardData.map(card => card.category))];

  const filter = (cat: any) => {
    if (cat === 'все') {
      setCards(cardData);
      return;
    }
    setCards(cardData.filter(item => item.category === cat));
  };

  return (
    <div className={s.container}>
      <div className={s.gallery}>
        <h1>Галерея</h1>
        <div className={s.button}>
          <Button categories={cats} onClick={filter} />
        </div>
        <Card allcards={cards} />
      </div>
    </div>
  );
};
