import css from './Battles.module.scss';
import { MenuItem } from '~/components/Layout/Battles/MenuItem/MenuItem';
import { FaqItem } from '~/components/Layout/Battles/FaqItem/FaqItem';
import * as React from "react";

export const Battles = () => {
  return(
    <div className={css.root}>
      <h1 className={css.title}>
          Выбирай дисциплину и <br/> <span>участвуй</span>
      </h1>
      <div className={css.mobTitle}>
        Выбирай дисциплину и <br/> <span>участвуй</span>
      </div>
      <h2 className={css.subtitle}>
        Заяви о себе, выигрывай крутейшие призы и становись новой версией себя! <br/> Пара простых шагов, и ты в деле!
      </h2>
      <div className={css.menu}>
        <MenuItem title={'Музыка и вокал'} link={'./music'} subtitle={'Музыка твое призвание? Покажи это на KFC BATTLE!'} pic={'images/main/people/people1.png'} position={'rightPic'} />
        <MenuItem title={'АРТ'} link={'./design'} subtitle={'Участвуй в KFC BATTLE— покажи всем, что твое творчество особенное!'} pic={'images/main/people/people2.png'} position={'leftPic'} />
        <MenuItem title={'ТАНЦЫ'} link={'./dance'} subtitle={'Приходи на KFC BATTLE  и докажи, что денсишь лучше всех!'} pic={'images/main/people/people3.png'} position={'rightPic'} />
        <MenuItem title={'КИБЕРСПОРТ'} link={'./cybersport'} subtitle={'Пойти на мид или защищать рампу? Решать тебе в матчах по Dota2 и CS:GO! '} pic={'images/main/people/people4.png'} position={'leftPic'} />
        <MenuItem title={'ВОЛОНТЕРСТВО'} link={'./social'} subtitle={'Расскажи о своем социальном проекте и получи поддержку KFC BATTLE в его реализации'} pic={'images/main/people/people5.png'} position={'rightPic'} />
      </div>
        <a className={css.fullRules} href="#">Полные правила конкурса</a>
        <a href="" ></a>
      <div className={css.faq}>
        <div className={css.faqTitle}>
          faq
        </div>
        <FaqItem num={'01'} subtitle={'Душа моя озарена неземной радостью, как эти чудесные весенние утра, которыми я наслаждаюсь от всего сердца. Я совсем один и блаженствую в здешнем краю, словно созданном для таких, как я.'} />
        <FaqItem num={'02'} subtitle={'Душа моя озарена неземной радостью, как эти чудесные весенние утра, которыми я наслаждаюсь от всего сердца. Я совсем один и блаженствую в здешнем краю, словно созданном для таких, как я.'} />
        <FaqItem num={'03'} subtitle={'Душа моя озарена неземной радостью, как эти чудесные весенние утра, которыми я наслаждаюсь от всего сердца. Я совсем один и блаженствую в здешнем краю, словно созданном для таких, как я.'} />
        <FaqItem num={'04'} subtitle={'Душа моя озарена неземной радостью, как эти чудесные весенние утра, которыми я наслаждаюсь от всего сердца. Я совсем один и блаженствую в здешнем краю, словно созданном для таких, как я.'} />
      </div>
      <div className={css.rules}>
        Общий срок проведения акции 01 марта 2022 года – 31 мая 2022 года, включая срок выдачи призов. Подробная информация об организаторе акции, о правилах ее проведения, количестве призов, сроках, месте и порядке их получения размещена на сайте. Количество призов ограничено. Внешний вид призов может отличаться от их изображений, размещаемых в рекламных материалах акции.
      </div>
    </div>
  )
}