import css from './Winners.module.scss';
import {CustomButton} from "~/components/Layout/DefaultLayout/CustomButton/CustomButton";

export const Winners = () => {
    return(
        <div className={css.root}>
            <div className={css.title}>
                Победители
            </div>
            <div className={css.search}>
                <div className={css.field}>
                    <div className={css.back}></div>
                    <input type="text" placeholder={'Мобильный телефон'}/>
                </div>
                <CustomButton text={'Найти'} />
            </div>
            <div className={css.table}>
                <div className={css.tableHeader}>
                    <div className={css.item}>
                        Дата  выигрыша
                    </div>
                    <div className={css.item}>
                        Имя
                    </div>
                    <div className={css.item}>
                        Телефон
                    </div>
                    <div className={css.item}>
                        Приз
                    </div>
                </div>
                <div className={css.tableRow}>
                    <div className={css.item}>
                        ДД.ММ.ГГГГ
                    </div>
                    <div className={css.item}>
                        ХХХХХХХХХХ
                    </div>
                    <div className={css.item}>
                        7ххх-***-**-**
                    </div>
                    <div className={css.item}>
                        ХХХХХХХХХХ
                    </div>
                </div>
                <div className={css.tableRow}>
                    <div className={css.item}>
                        ДД.ММ.ГГГГ
                    </div>
                    <div className={css.item}>
                        ХХХХХХХХХХ
                    </div>
                    <div className={css.item}>
                        7ххх-***-**-**
                    </div>
                    <div className={css.item}>
                        ХХХХХХХХХХ
                    </div>
                </div>
                <div className={css.tableRow}>
                    <div className={css.item}>
                        ДД.ММ.ГГГГ
                    </div>
                    <div className={css.item}>
                        ХХХХХХХХХХ
                    </div>
                    <div className={css.item}>
                        7ххх-***-**-**
                    </div>
                    <div className={css.item}>
                        ХХХХХХХХХХ
                    </div>
                </div>
                <div className={css.tableRow}>
                    <div className={css.item}>
                        ДД.ММ.ГГГГ
                    </div>
                    <div className={css.item}>
                        ХХХХХХХХХХ
                    </div>
                    <div className={css.item}>
                        7ххх-***-**-**
                    </div>
                    <div className={css.item}>
                        ХХХХХХХХХХ
                    </div>
                </div>
                <div className={css.tableRow}>
                    <div className={css.item}>
                        ДД.ММ.ГГГГ
                    </div>
                    <div className={css.item}>
                        ХХХХХХХХХХ
                    </div>
                    <div className={css.item}>
                        7ххх-***-**-**
                    </div>
                    <div className={css.item}>
                        ХХХХХХХХХХ
                    </div>
                </div>
            </div>
            <div className={css.counter}>
                <img src="images/main/leftArrowS.svg" alt="arrow" className={css.arrow}/>
                <div className={`${css.page} ${css.active}`}>1</div>
                <div className={css.page}>2</div>
                <div className={css.page}>3</div>
                <div className={css.page}>4</div>
                <div className={css.page}>5</div>
                <img src="images/main/rightArrowS.svg" alt="arrow" className={css.arrow}/>
            </div>
        </div>
    )
}