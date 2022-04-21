import css from './Menu.module.scss';
import * as React from "react";

export const Menu = () => {
    return(
        <div className={css.root}>
            <div className={css.redSquare}>
            </div>
            <div className={css.list}>
                <a href={'./'} className={css.menuTitle}>
                    Главная
                </a>
                <a href={'./battles'} className={css.menuItem}>
                    Выбирай дисциплину и участвуй
                </a>
                <a href={'./cybersport'} className={css.menuSubitem}>
                    КИБЕРСПОРТ
                </a>
                <a href={'./design'} className={css.menuSubitem}>
                    АРТ
                </a>
                <a href={'./dance'} className={css.menuSubitem}>
                    ТАНЦЫ
                </a>
                <a href={'./music'} className={css.menuSubitem}>
                    МУЗЫКА И ВОКАЛ
                </a>
                <a href={'./social'} className={css.menuSubitem}>
                    ВОЛОНТЕРСТВО
                </a>
                <a href="" className={css.menuSubitem}>
                    ПРАВИЛА
                </a>
                <a href="./battles#faq" className={css.menuSubitem}>
                    FAQ
                </a>
                <a href="./promo" className={css.menuItem}>
                    Меняй чеки на призы
                </a>
                <a href="" className={css.menuSubitem}>
                    ПРАВИЛА
                </a>
                <a href="./promo#faq" className={css.menuSubitem}>
                    FAQ
                </a>
                <a href={'./partners'} className={css.menuItem}>
                    ПАРТНЕРЫ
                </a>
                <a href={'./contacts'} className={css.menuItem}>
                    СВЯЗАТЬСЯ С НАМИ
                </a>
            </div>
        </div>
    )
}