import css from './Slide.module.scss';
import * as React from 'react';

export const Slide = (props) => {
  return(
    <div className={css.root}>
      <img src={props.pic} alt="slide" className={css.mainPic}/>
      <img src={props.mPic} alt='slide' className={css.mobPic} />
      <a href={props.link} target={'_blank'}></a>
    </div>
  )
}