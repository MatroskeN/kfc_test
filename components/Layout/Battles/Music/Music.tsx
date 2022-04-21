import css from './Music.module.scss';
import { Tabs } from '~/components/Layout/Battles/Music/Tabs/Tabs';
import { Video } from '~/components/Layout/DefaultLayout/Video/Video';
import { Partners } from '~/components/Layout/DefaultLayout/Partners/Partners';

export const Music = () => {
  return(
    <div className={css.root}>
      <h1 className={css.title}>
        МУЗЫКА и вокал <br/>
        <span>#music</span>
      </h1>
      <h2 className={css.subtitle}>
        <p>
          Твою музыку должны услышать миллионы! <br/>
        Стань частью KFC BATTLE и используй шанс прокачать свои таланты.
        </p>
      </h2>
      <Tabs />
      <Video />
    </div>
  )
}