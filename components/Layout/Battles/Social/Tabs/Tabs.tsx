import css from './Tabs.module.scss';

export const Tabs = () => {
  return(
    <div className={css.root}>
      <img src='images/main/battles/social.png' alt='dude' className={css.mainPic} />
      <div className={css.tabItem}>
        <img className={css.itemPic} src='images/main/battles/vector.png' alt='pic' />
        <div className={css.tabItem__title}>
          <p>Выбери</p>
          свое направление: <br/>
          <span>доступный город</span>, <span>социальная защита</span> или <span>экология</span>
        </div>
      </div>
        <div className={css.tabItem}>
            <img className={css.itemPic} src='images/main/battles/arrow.gif' alt='pic' />
            <img src="images/main/battles/party.gif" alt="gif" className={css.backGif}/>
            <div className={css.tabItem__title}>
                <p>СТАНЬ ЛУЧШИМ</p>
                наставники KFC BATTLE выберут ТОП-6 проектов, которые пройдут дальше, а их авторы получат дополнительное задание.
            </div>
        </div>
        <div className={css.tabItem}>
            <img className={css.itemPic} src='images/main/battles/heart.gif' alt='pic' />
            <div className={css.tabItem__title}>
                <p>ЗАПОЛНИ АНКЕТУ</p>
                и расскажи о своем проекте в 2-х минутном видео
            </div>
        </div>
      <div className={css.tabItem}>
        <img className={css.itemPic} src='images/main/battles/money.gif' alt='pic' />
        <div className={css.tabItem__title}>
          <p>Выиграй <span>1 200 000</span> ₽</p>
            на осуществление своего проекта и помощь от наставников KFC BATTLE!<br/>
          <a href='#'>
            Полные правила
          </a>
        </div>
      </div>
    </div>
  )
}