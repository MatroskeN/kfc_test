import css from './CheckListItem.module.scss';

export const CheckListItem = (props) => {
  return(
    <div className={css.root}>
      <div className={css.item}>
        {props.date}
      </div>
      <div className={css.item}>
        {props.summ}
      </div>
      <div className={css.item}>
        {props.status}
      </div>

    </div>
  )
}