import css from './Design.module.scss';
import { Partners } from '~/components/Layout/DefaultLayout/Partners/Partners';
import { Tabs } from '~/components/Layout/Battles/Design/Tabs/Tabs';
import { Example } from '~/components/Layout/Battles/Design/Example/Example';


export const Design = () => {
  return(
    <div className={css.root}>
      <h1 className={css.title}>
        Арт <br/>
        <span>#art</span>
      </h1>
      <h2 className={css.subtitle}>
        <p>
            Докажи, что твое творчество особенное! Лучшие работы оценит эксперт KFC BATTLE в крипто-арте Brickspacer
        </p>
      </h2>
      <Tabs />
      <Example />
      {/*<Partners />*/}
    </div>
  )
}