import css from './Checks.module.scss';
import { CheckListItem } from '~/components/Layout/PersonalArea/Checks/CheckListItem/CheckListItem';
import { CustomButton } from '~/components/Layout/DefaultLayout/CustomButton/CustomButton';
import {useState} from "react";
import * as React from "react";

export const Checks = () => {
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };
  return(
    <div className={css.root}>
      <div className={css.checkList}>
        <div className={css.itemTitle}>
          мои чеки
        </div>
        <div className={css.checkList__header}>
          <div className={css.headerItem}>
            Дата/время <br/>
            загрузки чека
          </div>
          <div className={css.headerItem}>
            Сумма
          </div>
          <div className={css.headerItem}>
            Статус
          </div>
        </div>
        <CheckListItem date={'ДД.ММ.ГГГГ'} summ={'ХХХХХХХХХХ'} status={'Чек принят'} />
        <CheckListItem date={'ДД.ММ.ГГГГ'} summ={'ХХХХХХХХХХ'} status={<div>Отклонен. <br/> Чек загружен ранее</div>} />
        <CheckListItem date={'ДД.ММ.ГГГГ'} summ={'ХХХХХХХХХХ'} status={<div>Отклонен. <br/> Чек загружен ранее</div>} />
        <CheckListItem date={'ДД.ММ.ГГГГ'} summ={'ХХХХХХХХХХ'} status={'Чек принят'} />
        <CheckListItem date={'ДД.ММ.ГГГГ'} summ={'ХХХХХХХХХХ'} status={'Чек принят'} />
      </div>
      <div className={css.balance}>
        <div className={css.itemTitle}>
          баланс
        </div>
        <div className={css.leftover}>
          <div className={css.leftoverHeader}>
            <div className={css.mobTitle}>БАЛАНС</div>
            <div>
              <span>50 ₽</span> остаток
            </div>
          </div>
          <div className={css.leftoverContent}>
            Каждые 350 рублей дают
            1 шанс в еженедельном розыгрыше призов.
            Остаток суммы автоматически переносится на следующую неделю
          </div>
        </div>
        <div onClick={toggleClass}>
          <CustomButton text={'загрузить чек'} />
        </div>
      </div>
      <div className={isActive ? `${css.checkModal}` : `${css.none}`}>
        <div className={css.filter}>
          <div className={css.modal}>
            <svg className={css.xclose} onClick={toggleClass} width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9998 1.44703L1.52954 15.9172L0.0825195 14.4702L14.5527 4.35276e-06L15.9998 1.44703Z" fill="#E4002B"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M14.47 16.0627L-0.000243638 1.59253L1.44678 0.145508L15.917 14.6157L14.47 16.0627Z" fill="#E4002B"/>
            </svg>
            <div className={css.modalTitle}>
              Загрузить чек
            </div>
            <div className={css.instructions}>
              1. Нажмите на область “Перетащите фото чека или нажмите для выбора” и выберите фото чека; <br/>
              2. Если чек длинный, сделайте несколько последовательных фото <br/>
              3. Если на чеке есть QR-код, сделайте фото отдельным кадром <br/>
              4. Если фото окажется плохого качества, чек принят не будет
            </div>
            <div className={css.upload}>
              <input type="file"/>
              <div className={css.mask}>
                <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 21L18 21" stroke="#E4002B" stroke-width="2"/>
                  <path d="M8.95833 16.292L9.58303 17.0729L8.95833 17.5726L8.33364 17.0729L8.95833 16.292ZM7.95833 1.79199L7.95833 0.791992L9.95833 0.791992L9.95833 1.79199L7.95833 1.79199ZM15.6247 12.2395L9.58303 17.0729L8.33364 15.5111L14.3753 10.6778L15.6247 12.2395ZM8.33364 17.0729L2.29197 12.2395L3.54136 10.6778L9.58303 15.5111L8.33364 17.0729ZM7.95833 16.292L7.95833 1.79199L9.95833 1.79199L9.95833 16.292L7.95833 16.292Z" fill="#E4002B"/>
                </svg>
                <p>нажмите для выбора</p>
              </div>
            </div>
            <div className={css.modalBtn__block}>
              <CustomButton text={'Сканировать чек'} />
              <CustomButton text={'Загрузить чек'} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}