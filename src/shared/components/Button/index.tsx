import { MouseEvent, ReactNode } from 'react';
import styles from './button.module.css';


type ButtonProps = {
  icon?: ReactNode;
  children?: ReactNode;
  // onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  onClick?: any;
  categories: any;
};


export const Button = (props: ButtonProps) => {
  
    const buttons = props.categories.map((category: string, index: number) => {
      return (
        <div className={styles.button_container} key={index}>
          <button onClick={() => props.onClick(category)}>
          {category.toUpperCase()}
          </button>
        </div>
      )
    })
  
    return <div className={styles.all_buttons}>{buttons}</div>
  };


  
