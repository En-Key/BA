import s from './card.module.css';
import { CardDataType } from 'shared/mocks/data';

export const Card = ({ allcards }: any) => {
  const cards = allcards.map((card: any) => {
    return (
      <div className={s.card_container} key={card.id}>
        <img src={card.img} alt="" />
        <div className={s.card_details}>
          <h2>{card.title}</h2>
          <p>{card.desc}</p>
        </div>
      </div>
    );
  });
  return <div className={s.all_cards}>{cards}</div>;
};
