import css from './PartnerItem.module.scss';
import {useState} from "react";
import {CustomButton} from "~/components/Layout/DefaultLayout/CustomButton/CustomButton";

export const PartnerItem = (props) => {
    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
        setActive(!isActive);
    };
  return(
    <div className={css.root}>
      <div className={isActive ? `${css.filter} ${css.filterActive}` : `${css.filter}`}>
          <div onClick={toggleClass} className={css.modal}>
              <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9998 1.44703L1.52954 15.9172L0.0825195 14.4702L14.5527 4.35276e-06L15.9998 1.44703Z" fill="#E4002B"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.47 16.0627L-0.000243638 1.59253L1.44678 0.145508L15.917 14.6157L14.47 16.0627Z" fill="#E4002B"/>
              </svg>
              <img src={props.pic} className={css.modalPic} alt="partner"/>
              <div className={css.title}>
                  {props.name}
              </div>
              <div className={css.subtitle}>
                  Душа моя озарена неземной радостью, как эти чудесные весенние утра, которыми я наслаждаюсь от всего сердца.
              </div>
              <CustomButton text={'Перейти на сайт'} />
          </div>
      </div>
      <img src={props.pic} className={css.mainPic} alt='partner' />
      <a href={'#'} onClick={toggleClass}>
        Подробнее
      </a>
    </div>
  )
}