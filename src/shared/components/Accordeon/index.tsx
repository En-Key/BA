import { useRef, useState } from 'react';
import { AccordeonItem } from './AccordeonItem';
import s from './accordeon.module.css';
import { useClickOutside } from 'hooks/useClickOutside';

export const Accordeon = ({ faqList }: any) => {
  const [openId, setId] = useState(null);

  return (
    <>
      <div className={s.container}>
        <ul className={s.accordeon}>
          {faqList.map((faqItem: any, id: any) => {
            return (
              <AccordeonItem
                onClick={() => (id === openId ? setId(null) : setId(id))}
                faqItem={faqItem}
                isOpen={id === openId}
                key={id}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
};
