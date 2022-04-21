import css from './Mentors.module.scss';

export const Mentors = () => {
  return(
    <div className={css.root}>
      <div className={css.title}>
        наставники
      </div>
      <div className={css.content}>
        <div className={css.item}>
          Имя <br/>
          Фамилия
        </div>
        <div className={css.item}>
          Имя <br/>
          Фамилия
        </div>
        <div className={css.item}>
          Имя <br/>
          Фамилия
        </div>
      </div>
    </div>
  )
}