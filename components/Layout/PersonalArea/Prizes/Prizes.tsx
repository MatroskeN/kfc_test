import css from './Prizes.module.scss';
import { PrizeItem } from '~/components/Layout/PersonalArea/Prizes/PrizeItem/PrizeItem';

export const Prizes = () => {
  return(
    <div className={css.root}>
      <div className={css.title}>
        Мои призы
      </div>
      <div className={css.header}>
        <div className={css.item}>
          Дата выигрыша
        </div>
        <div className={css.item}>
          Направление
        </div>
        <div className={css.item}>
          Наименование приза
        </div>
        <div className={css.item}>
          Статус
        </div>
      </div>
      <PrizeItem date={'ДД.ММ.ГГГГ'} field={'ХХХХХХХХХХ'} prize={'ХХХХХХХХХХ'} status={'Получить приз!'} />
      <PrizeItem date={'ДД.ММ.ГГГГ'} field={'ХХХХХХХХХХ'} prize={'ХХХХХХХХХХ'} status={'Приз получен'} />
      <PrizeItem date={'ДД.ММ.ГГГГ'} field={'ХХХХХХХХХХ'} prize={'ХХХХХХХХХХ'} status={'Приз получен'} />
      <PrizeItem date={'ДД.ММ.ГГГГ'} field={'ХХХХХХХХХХ'} prize={'ХХХХХХХХХХ'} status={'Приз отправлен'} />
      <PrizeItem date={'ДД.ММ.ГГГГ'} field={'ХХХХХХХХХХ'} prize={'ХХХХХХХХХХ'} status={'Приз отправлен'} />
    </div>
  )
}