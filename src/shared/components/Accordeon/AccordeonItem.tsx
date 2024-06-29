import React, { useRef } from 'react';
// import { ReactComponent as ArrowIcon } from "../arrow-icon.svg";

import AccordeonIconAdd from 'assets/icons/add.svg';
import AccordeonIconRemove from 'assets/icons/remove.svg';
// import AccordeonIcon from 'assets/icons/arrow-icon.svg';

import s from './accordeon.module.css';
import clsx from 'clsx';
import { useClickOutside } from 'hooks/useClickOutside';

export const AccordeonItem = ({ faqItem, onClick, isOpen }: any) => {
  const itemRef = useRef<null | any>(null);
  const menuRef = useRef(null);

  useClickOutside(menuRef, () => {
    if (isOpen) setTimeout(() => onClick(), 50);
  });

  return (
    <li className={s.accordeon_item} ref={menuRef}>
      <button className={clsx(s.accordeon_header, { [s.active]: isOpen })} onClick={() => onClick()}>
        {faqItem.q}
        <AccordeonIconAdd className={clsx(s.accordeon_icon_add, { [s.active]: isOpen })} />
        <AccordeonIconRemove className={clsx(s.accordeon_icon_remove, { [s.active]: isOpen })} />
      </button>
      <div
        className={s.accordeon_collapse}
        style={isOpen ? { height: itemRef.current.scrollHeight } : { height: '0px' }}
      >
        <div className={s.accordeon_body} ref={itemRef}>
          {faqItem.a}
        </div>
      </div>
    </li>
  );
};
