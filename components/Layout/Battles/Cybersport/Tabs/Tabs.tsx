import css from './Tabs.module.scss';

export const Tabs = (props) => {
  return(
    <div className={css.root}>
      <img src='images/main/battles/gamer.png' alt='dude' className={css.mainPic} />
      <div className={css.tabItem}>
        <img className={css.itemPic} src='images/main/battles/vector.png' alt='pic' />
        <div className={css.tabItem__title}>
          <p>ВЫБЕРИ</p>
            DOTA2 или CS:GO
        </div>
      </div>
      <div className={css.tabItem}>
        <img className={css.itemPic} src='images/main/battles/sword.png' alt='pic' />
        <div className={css.tabItem__title}>
          <p>Сражайся</p>
          В команде 5х5 или 2х2
          и забери главный приз
        </div>
      </div>
      <div className={css.tabItem}>
        <img className={css.itemPic} src='images/main/battles/chart.png' alt='pic' />
        <div className={css.tabItem__title}>
          <p>зарегистрируй</p>
          команду на <a href='https://www.faceit.com/' target={"_blank"}>FaceIT</a>
        </div>
      </div>
      <div className={css.tabItem} onClick={props.click}>
        <img className={css.itemPic} src='images/main/battles/money.gif' alt='pic' />
        <div className={css.tabItem__title}>
        <p>ПРИЗОВОЙ ФОНД <br/>общей суммой <br/><span>1 000 000</span> ₽ <a data-title="4 призовых места в категории CS GO: 5х5 4 призовых места в категории CS GO: 2х2   4 призовых места в DOTA2" href='#'><img src='images/main/battles/question.png' alt='question' /></a></p>
          <a href='#'>
            Полные правила
          </a>
        </div>
      </div>
    </div>
  )
}