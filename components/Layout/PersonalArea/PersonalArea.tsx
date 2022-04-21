import css from './PersonalArea.module.scss';
import { Info } from '~/components/Layout/PersonalArea/Info/Info';
import { Checks } from '~/components/Layout/PersonalArea/Checks/Checks';
import { Prizes } from '~/components/Layout/PersonalArea/Prizes/Prizes';

export const PersonalArea = () => {

  return(
    <div className={css.root}>
      <div className={css.content}>
        <h1 className={css.title}>
          личный <span>кабинет</span>
        </h1>
        <Info />
        <Checks />
        <Prizes />
      </div>
      <div className={css.rules}>
        Общий срок проведения акции 01 марта 2022 года – 31 мая 2022 года, включая срок выдачи призов. Подробная информация об организаторе акции, о правилах ее проведения, количестве призов, сроках, месте и порядке их получения размещена на сайте. Количество призов ограничено. Внешний вид призов может отличаться от их изображений, размещаемых в рекламных материалах акции.
      </div>
    </div>
  )
}