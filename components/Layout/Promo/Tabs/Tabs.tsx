import css from './Tabs.module.scss';

export const Tabs = (props) => {
  return(
    <div className={css.root}>
      <img src='images/main/battles/promo.png' alt='dude' className={css.mainPic} />
      <a target={'_blank'} href='https://www.kfc.ru/'>
        <div className={css.tabItem}>
          <img className={css.itemPic} src='images/main/battles/basket.gif' alt='pic' />
          <div className={css.tabItem__title}>
            <p className={css.red}>Покупай</p> или заказывай KFC <br/> онлайн
            <button className={css.tabBtn}>
              <div className={css.border}>
              </div>
              <a href={props.link} target={'_blank'}>Купить</a>
            </button>
          </div>
        </div>
      </a>
      <div className={css.tabItem} onClick={props.click}>
        <img className={css.itemPic} src='images/main/battles/receipt.gif' alt='pic' />
        <div className={css.tabItem__title}>
          <p className={css.red}>Регистрируй</p>
            чеки и выбирай в розыгрыше
            каких <div className={css.space}></div> призов участвовать
        </div>
      </div>
      <div className={css.tabItem} onClick={props.click}>
        <img className={css.itemPic} src='images/main/battles/plus.gif' alt='pic' />
        <div className={css.tabItem__title}>
          <p className={css.red}>Суммируй <br/> чеки <a href='#'><img src='images/main/battles/question.png' alt='question' /></a></p>
            и увеличивай шансы <br/>
            на победу. Каждые 350 рублей дают 1 шанс в еженедельном розыгрыше призов. Остаток суммы автоматически переносится на следующую неделю.
        </div>
      </div>
      <div className={css.tabItem}>
        <a href='#prizes' className={css.anchor}></a>
        <img className={css.itemPic} src='images/main/battles/money.gif' alt='pic' />
        <div className={css.tabItem__title}>
          <p className={css.red}>Получи</p>
          гарантированные призы <br/>
          и шанс выиграть <br/>
          главный приз <br/>
          <p>
          <div className={css.auto}>АВТОМОБИЛЬ</div>
          </p>
        </div>
      </div>
    </div>
  )
}