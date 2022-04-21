import css from './FaqItem.module.scss';
import { useState } from 'react';

export const FaqItem = (props) => {
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };
  return(
    <div className={isActive ? `${css.root} ${css.activeRoot}` : `${css.root}`} onClick={toggleClass}>
      <div className={css.top}>
        <div className={css.number}>
          {props.num}
        </div>
        <div className={css.title}>Вопрос</div>
        <button>
          <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.04159 5.83301L7.66628 6.61388L7.04159 7.11363L6.41689 6.61388L7.04159 5.83301ZM13.7079 1.78054L7.66628 6.61388L6.41689 5.05214L12.4586 0.218806L13.7079 1.78054ZM6.41689 6.61388L0.375225 1.78054L1.62461 0.218806L7.66628 5.05214L6.41689 6.61388Z" fill="#E4002B"/>
          </svg>
        </button>
      </div>
      <div className={css.bottom}>
        {props.subtitle}
      </div>
    </div>
  )
}