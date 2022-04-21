import css from './Partners.module.scss';

export const Partners = () => {
  return(
    <div className={css.root}>
      <div className={css.title}>
        Партнеры
      </div>
      <div className={css.items}>
        <a href="./partners">
            <img src='images/main/partners/mir.png' alt='partner' />
        </a>
          <a href="./partners">
              <img src='images/main/partners/spotify.png' alt='partner' />
          </a>
          <a href="./partners">
              <img src='images/main/partners/yandex.png' alt='partner' />
          </a>
          <a href="./partners">
              <img src='images/main/partners/mir.png' alt='partner' />
          </a>
          <a href="./partners">
              <img src='images/main/partners/spotify.png' alt='partner' />
          </a>
          <a href="./partners">
              <img src='images/main/partners/yandex.png' alt='partner' />
          </a>
      </div>
    </div>
  )
}