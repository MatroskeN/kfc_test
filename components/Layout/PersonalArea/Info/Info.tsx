import css from './Info.module.scss';

export const Info = () => {
  return(
    <div className={css.root}>
      <div className={css.contacts}>
        <div className={css.block}>
          <p className={css.contactItem}>Леонид Петров</p>
          <a className={css.contactItem} href='tel:+7988475-85-84'>+7 (988) 475-85-84</a> <br/>
          <a className={css.contactItem} href='mailto:ivanovivan@mail.ru'>ivanovivan@mail.ru</a>
          <p className={css.contactItem}>
            г. Нижний-Новгород
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.315 15.4345C3.21094 15.4343 3.10807 15.4125 3.0129 15.3704C2.91774 15.3283 2.83238 15.2669 2.76225 15.19C2.69085 15.1138 2.63636 15.0233 2.60237 14.9246C2.56838 14.8258 2.55564 14.721 2.565 14.617L2.74875 12.5965L11.2372 4.11098L13.89 6.76298L5.40375 15.2477L3.38325 15.4315C3.36056 15.4336 3.33778 15.4346 3.315 15.4345ZM14.4195 6.23273L11.7675 3.58073L13.3582 1.98998C13.4279 1.92025 13.5106 1.86493 13.6017 1.82719C13.6927 1.78945 13.7903 1.77002 13.8889 1.77002C13.9874 1.77002 14.085 1.78945 14.1761 1.82719C14.2671 1.86493 14.3498 1.92025 14.4195 1.98998L16.0102 3.58073C16.08 3.65039 16.1353 3.73311 16.173 3.82415C16.2108 3.9152 16.2302 4.0128 16.2302 4.11136C16.2302 4.20992 16.2108 4.30752 16.173 4.39856C16.1353 4.48961 16.08 4.57233 16.0102 4.64198L14.4202 6.23198L14.4195 6.23273Z" fill="black"/>
            </svg>
          </p>
        </div>
        <hr/>
        <div className={css.block}>
          <p className={css.contactItem}>
            Привязанные
            социальные сети:
          </p>
          <div className={css.socials}>
            <a href='https://vk.com/kfc_battle' target={"_blank"}><img src='images/main/social/VK.svg' alt='social' /></a>
            <a href='https://www.tiktok.com/@kfc_battle' target={"_blank"}><img src='images/main/social/instagram.svg' alt='social' /></a>
            <a href='https://www.instagram.com/kfc_battle/' target={"_blank"}><img src='images/main/social/tiktok.svg' alt='social' /></a>
          </div>
        </div>
      </div>
      <div className={css.thisWeek}>
        <div className={css.weekTitle}>
          участие в розыгрыше на текущей неделе:
        </div>
        <div className={css.categories}>
          <div className={`${css.categoryItem} ${css.activeItem}`}>
            <div className={css.itemTitle}>
              Арт
            </div>
            <div className={css.itemSubtitle}>
              кол-во попыток: 2
            </div>
          </div>
          <div className={css.categoryItem}>
            <div className={css.itemTitle}>
              музыка
            </div>
          </div>
          <div className={css.categoryItem}>
            <div className={css.itemTitle}>
              танцы
            </div>
          </div>
          <div className={`${css.categoryItem} ${css.activeItem}`}>
            <div className={css.itemTitle}>
              киберспорт
            </div>
            <div className={css.itemSubtitle}>
              кол-во попыток: 1
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}