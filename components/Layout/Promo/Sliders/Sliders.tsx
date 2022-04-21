import css from './Sliders.module.scss';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

export const Sliders = () => {
    return(
        <div className={css.root} id={'prizes'}>
            <div className={css.title}>
                Призы
            </div>
            <div className={css.subtitle}>
                Гарантированные
            </div>
            <div className={`${css.tabs} ${css.bigTabs}`}>
                <div className={`${css.item} ${css.activeItem}`}>
                    За регистрацию на сайте
                </div>
                <div className={css.item}>
                    За регистрацию чека
                </div>
            </div>
            <Swiper
              spaceBetween={8}
              slidesPerView={'auto'}
              className={css.slider}
              centeredSlides
            >
                <SwiperSlide className={css.slide}>
                    <img src="images/main/yandex.png" alt="slide"/>
                    <div className={css.slideTitle}>
                        Подписка на месяц <br/>
                        Яндекс Плюс
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className={css.tabs}>
                <div className={`${css.item} ${css.activeItem}`}>
                    Арт
                </div>
                <div className={css.item}>
                    Музыка
                </div>
                <div className={css.item}>
                    Киберспорт
                </div>
                <div className={css.item}>
                    Танцы
                </div>
            </div>
            <div className={css.subtitle}>
                Еженедельные
            </div>
            <Swiper
                spaceBetween={8}
                slidesPerView={'auto'}
                className={css.slider}
            >
                <SwiperSlide className={css.slide}>
                    <img src="images/main/jbl.png" alt="slide"/>
                    <div className={css.slideTitle}>
                        Подписка на месяц <br/>
                        Кинопоиск HD
                    </div>
                </SwiperSlide>
                <SwiperSlide className={css.slide}>
                    <img src="images/main/jbl.png" alt="slide"/>
                    <div className={css.slideTitle}>
                        Подписка на месяц <br/>
                        Кинопоиск HD
                    </div>
                </SwiperSlide>
                <SwiperSlide className={css.slide}>
                    <img src="images/main/jbl.png" alt="slide"/>
                    <div className={css.slideTitle}>
                        Подписка на месяц <br/>
                        Кинопоиск HD
                    </div>
                </SwiperSlide>
                <SwiperSlide className={css.slide}>
                    <img src="images/main/jbl.png" alt="slide"/>
                    <div className={css.slideTitle}>
                        Подписка на месяц <br/>
                        Кинопоиск HD
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className={css.subtitle}>
                Ежемесячные
            </div>
            <Swiper
                spaceBetween={8}
                slidesPerView={'auto'}
                className={css.slider}
            >
                <SwiperSlide className={css.slide}>
                    <img src="images/main/jbl.png" alt="slide"/>
                    <div className={css.slideTitle}>
                        Подписка на месяц <br/>
                        Кинопоиск HD
                    </div>
                </SwiperSlide>
                <SwiperSlide className={css.slide}>
                    <img src="images/main/jbl.png" alt="slide"/>
                    <div className={css.slideTitle}>
                        Подписка на месяц <br/>
                        Кинопоиск HD
                    </div>
                </SwiperSlide>
                <SwiperSlide className={css.slide}>
                    <img src="images/main/jbl.png" alt="slide"/>
                    <div className={css.slideTitle}>
                        Подписка на месяц <br/>
                        Кинопоиск HD
                    </div>
                </SwiperSlide>
                <SwiperSlide className={css.slide}>
                    <img src="images/main/jbl.png" alt="slide"/>
                    <div className={css.slideTitle}>
                        Подписка на месяц <br/>
                        Кинопоиск HD
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}