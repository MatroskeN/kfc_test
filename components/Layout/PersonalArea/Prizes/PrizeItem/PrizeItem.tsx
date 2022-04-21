import css from './PrizeItem.module.scss';

export const PrizeItem = (props) => {
  return(
    <div className={css.root}>
      <div className={css.item}>
        {props.date}
      </div>
      <div className={css.item}>
        {props.field}
      </div>
      <div className={css.item}>
        {props.prize}
      </div>
      <div className={css.item}>
        {props.status}
      </div>
    </div>
  )
}