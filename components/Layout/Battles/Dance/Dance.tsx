import css from './Dance.module.scss';
import { Video } from '~/components/Layout/DefaultLayout/Video/Video';
import { Partners } from '~/components/Layout/DefaultLayout/Partners/Partners';
import { Tabs } from '~/components/Layout/Battles/Dance/Tabs/Tabs';

export const Dance = () => {
  return(
    <div className={css.root}>
      <h1 className={css.title}>
        танцы <br/>
        <span>#dance</span>
      </h1>
      <h2 className={css.subtitle}>
        <p>
            Покажи, что умеешь в KFC BATTLE и получи шанс прокачать свое мастерство! А поддерживать тебя будет NILETTO!
        </p>
      </h2>
      <Tabs />
      <Video />
      {/*<Partners />*/}
    </div>
  )
}