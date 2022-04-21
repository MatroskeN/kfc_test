import css from './MainPartners.module.scss';
import { PartnerItem } from '~/components/Layout/MainPartners/PartnerItem/PartnerItem';
import {useState} from "react";

export const MainPartners = () => {
  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);
  };
  return(
    <div className={css.root}>
      <div className={css.content}>
        <h1 className={css.title}>
          Основные партнеры
        </h1>
        <div className={css.mainPartners}>
          <div className={css.item}>
            <img src='images/main/vk.png' alt='partner' />
            <div className={css.itemContent}>
              <div className={css.itemTitle}>
                название партнера
              </div>
              <div className={css.itemSubtitle}>
                Каждые 350 рублей дают 1 шанс в еженедельном розыгрыше призов.
              </div>
              <a href={'#'} className={css.itemLink}>
                Перейти на сайт
              </a>
            </div>
          </div>
          <div className={css.item}>
            <img src='images/main/adidas.png' alt='partner' />
            <div className={css.itemContent}>
              <div className={css.itemTitle}>
                название партнера
              </div>
              <div className={css.itemSubtitle}>
                Каждые 350 рублей дают 1 шанс в еженедельном розыгрыше призов.
              </div>
              <a href={'#'} className={css.itemLink}>
                Перейти на сайт
              </a>
            </div>
          </div>
        </div>
        <div className={css.partners}>
          <div className={css.partnersTitle}>
            Партнеры
          </div>
          <div className={css.partnersItems}>
            <PartnerItem pic={'images/main/spotify.png'} name={'Название партнера'} />
            <PartnerItem pic={'images/main/adidas.png'} name={'Название партнера'} />
            <PartnerItem pic={'images/main/vk.png'} name={'Название партнера'} />
            <PartnerItem pic={'images/main/adidas.png'} name={'Название партнера'} />
            <PartnerItem pic={'images/main/vk.png'} name={'Название партнера'} />
            <PartnerItem pic={'images/main/spotify.png'} name={'Название партнера'} />
            <PartnerItem pic={'images/main/spotify.png'} name={'Название партнера'} />
            <PartnerItem pic={'images/main/adidas.png'} name={'Название партнера'} />
            <PartnerItem pic={'images/main/vk.png'} name={'Название партнера'} />
          </div>
        </div>
      </div>
      <div className={css.found}>
        <div className={css.background}></div>
        <div className={css.foundTitle}>
          о фонде
        </div>
        <img src='images/main/battles/example.png' alt='example' />
        <div className={css.foundText}>
          Душа моя озарена неземной радостью, как эти чудесные весенние утра, которыми я наслаждаюсь от всего сердца. Я совсем один и блаженствую в здешнем краю, словно созданном для таких, как я.
        </div>
        <a href='#'>Перейти на сайт</a>
      </div>
    </div>
  )
}