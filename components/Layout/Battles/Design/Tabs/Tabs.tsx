import css from './Tabs.module.scss';

export const Tabs = () => {
  return(
    <div className={css.root}>
      <img src='images/main/battles/design.png' alt='dude' className={css.mainPic} />
      <div className={css.tabItem}>
        <img className={css.itemPic} src='images/main/battles/brush.svg' alt='pic' />
        <div className={css.tabItem__title}>
          <p>СОЗДАЙ</p>
          свой оригинальный арт
          в фирменных цветах KFC
        </div>
      </div>
        <div className={css.tabItem}>
            <img className={css.itemPic} src='images/main/battles/arrow.gif' alt='pic' />
            <img src="images/main/battles/party.gif" alt="gif" className={css.backGif}/>
            <div className={css.tabItem__title}>
                <p>попади в ТОП-10 <a data-title="15 мая мы опубликуем на сайте список тех, кто проходит во  второй тур и пришлем им в директ дополнительное задание." href='#'><img src='images/main/battles/question.svg' alt='question' /></a></p>
                и выполни дополнительное задание
            </div>
        </div>
      <div className={css.tabItem}>
        <img className={css.itemPic} src='images/main/battles/socials.gif' alt='pic' />
          <img src="images/main/battles/instmini.svg" alt="inst" className={css.backInst}/>
        <div className={css.tabItem__title}>
          <p>Выложи</p>
            пост в социальные сети с <span>#KFCBattle</span> и <span>#art</span>
        </div>
      </div>
      <div className={css.tabItem}>
        <img className={css.itemPic} src='images/main/battles/money.gif' alt='pic' />
        <div className={css.tabItem__title}>
          <p>Выиграй <span>500 000</span> ₽</p>
            и возможность увидеть свой дизайн на баскете KFC!
            Остальные 9 финалистов также получат крутые призы на выбор!
            <br/>
          <a href='#'>
            Полные правила
          </a>
        </div>
      </div>
    </div>
  )
}