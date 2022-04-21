import css from './MenuItem.module.scss';
import { useState } from 'react';

export const MenuItem = (props) => {
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };
  return(
    <div className={isActive ? `${css.root} ${css.activeRoot} ${css[props.position]}` : `${css.root} ${css[props.position]}`} >
      <div className={css.text}>
        <div className={css.title}>
          {props.title}
        </div>
        <div className={css.subtitle}>
          {props.subtitle}
        </div>
      </div>
      <div className={css.box}>
        <a href={props.link}>
          <img src={props.pic} alt='people' className={css.pic} />
        </a>
      </div>
      <button className={css.arrow}>
          <a href={props.link}>
              <img src='images/main/arrow.svg' alt='arrow'  />
          </a>
      </button>
      <a href={props.link} className={css.wideLink}></a>
    </div>
  )
}