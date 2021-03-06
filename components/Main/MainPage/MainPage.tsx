import css from './MainPage.module.scss';
import * as React from 'react';
import Slider from "react-slick";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Slide } from './Slide/Slide';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <img onClick={onClick} src="images/main/rightArrowS.svg" alt="arrow" className={`${css.arrow} ${css.rightArrow} rightArrow`}/>
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <img onClick={onClick} src="images/main/leftArrowS.svg" alt="arrow"  className={`${css.arrow} ${css.leftArrow} leftArrow`}/>
    );
}

export const MainPage = () => {

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        nextArrow: <SampleNextArrow className={css.rightArrow} />,
        prevArrow: <SamplePrevArrow />
    };

  return(
    <div className={css.root}>
      <div className={css.content}>
          <Slider {...settings} className={css.slider}>
              <Slide pic={'images/main/banner/slide1.png'} mPic={'images/main/banner/mobslide1.png'} link={'./battles'} />
              <Slide pic={'images/main/banner/slide2.png'} mPic={'images/main/banner/mobslide2.png'} link={'./music'} />
              <Slide pic={'images/main/banner/slide3.png'} mPic={'images/main/banner/mobslide3.png'} link={'./cybersport'} />
              <Slide pic={'images/main/banner/slide4.png'} mPic={'images/main/banner/mobslide4.png'} link={'./cybersport'} />
              <Slide pic={'images/main/banner/slide5.png'} mPic={'images/main/banner/mobslide5.png'} link={'./design'} />
          </Slider>
          <div className={css.mobNavigation}>
              <svg className={`${css.mobArrow} ${css.mobLeftArrow} leftArrow`} width="25" height="18" viewBox="0 0 25 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 9L20.5 1.20577L20.5 16.7942L7 9Z" fill="#E3032C"/>
                  <path d="M12.5 15.0622L2 9L12.5 2.93782L12.5 15.0622Z" stroke="black" stroke-width="2"/>
              </svg>
              <svg className={`${css.mobArrow} ${css.mobRightArrow} rightArrow`} width="25" height="18" viewBox="0 0 25 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 9L4.5 16.7942L4.5 1.20577L18 9Z" fill="#E3032C"/>
                  <path d="M12.5 2.93782L23 9L12.5 15.0622L12.5 2.93782Z" stroke="black" stroke-width="2"/>
              </svg>
          </div>
          <div className={css.links}>
              <div className={css.item}>
                  <img src="images/main/battles/battle.gif" alt="pic"/>
                  <a href="./battles">
                      <button className={css.itemTitle}>
                          ??????????????  <br/> ???????????????????? ?? <br/>
                          <span> ????????????????</span>
                          <svg width="25" height="33" viewBox="0 0 25 33" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink={"http://www.w3.org/1999/xlink"}>
                              <rect x="0.305664" y="0.771729" width="24.5144" height="32.1751" fill="url(#pattern0)"/>
                              <defs>
                                  <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                      <use href="#image0_1701_3738" transform="translate(0 -0.000392893) scale(0.00330033 0.00251454)"/>
                                  </pattern>
                                  <image id="image0_1701_3738" width="303" height="398" href="data:image/png;base64,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"/>
                              </defs>
                          </svg>
                      </button>
                  </a>
              </div>

              <div className={css.item}>
                  <img src="images/main/bskt.png" alt="pic"/>
                  <a href="./promo">
                      <button className={css.itemTitle}>
                          ?????????? ???????? ???? <br/>
                          <span>??????????</span>
                          <svg width="25" height="33" viewBox="0 0 25 33" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink={"http://www.w3.org/1999/xlink"}>
                              <rect x="0.305664" y="0.771729" width="24.5144" height="32.1751" fill="url(#pattern0)"/>
                              <defs>
                                  <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                      <use href="#image0_1701_3738" transform="translate(0 -0.000392893) scale(0.00330033 0.00251454)"/>
                                  </pattern>
                                  <image id="image0_1701_3738" width="303" height="398" href="data:image/png;base64,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"/>
                              </defs>
                          </svg>
                      </button>
                  </a>
              </div>

          </div>
          <div className={css.footnote}>
              *?????????? ?????????????????? ?????????? ?????????????????? ?????????? ?????????? 15 000 000 ??????.
          </div>
      </div>
    </div>
  )
}