import css from './Example.module.scss';

export const Example = () => {
  return(
    <div className={css.root}>
      <div className={css.background}></div>
      <div className={css.title}>
        пример работы
      </div>
      <img src='images/main/battles/example.png' alt='example' className={css.example} />
    </div>
  )
}