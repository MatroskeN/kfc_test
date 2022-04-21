import css from './Video.module.scss';

export const Video = () => {
  return(
    <div className={css.root}>
      <div className={css.background}></div>
      <div className={css.title}>
        примеры Видео
      </div>
      <div className={css.content}>
        <video controls poster={'images/main/battles/poster.png'} src=''></video>
        <video controls poster={'images/main/battles/poster.png'} src=''></video>
      </div>
    </div>
  )
}