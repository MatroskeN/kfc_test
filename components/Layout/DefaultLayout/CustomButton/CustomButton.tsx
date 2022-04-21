import css from './CustomButton.module.scss';

export const CustomButton = (props) => {
  return(
    <button className={css.root}>
      <div className={css.border}>
      </div>
      <p>{props.text}</p>
    </button>
  )
}