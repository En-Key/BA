
import { Accordeon } from 'shared/components/Accordeon';
import { faqList } from 'shared/mocks/faqList';
import s from './faq.module.css';

export const Faq = () => {
  
  return (
    <Accordeon faqList={faqList} />
  );
};
