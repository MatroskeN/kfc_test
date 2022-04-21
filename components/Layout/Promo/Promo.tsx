import css from './Promo.module.scss';
import {CustomButton} from "~/components/Layout/DefaultLayout/CustomButton/CustomButton";
import {Tabs} from "~/components/Layout/Promo/Tabs/Tabs";
import {Sliders} from "~/components/Layout/Promo/Sliders/Sliders";
import {Winners} from "~/components/Layout/Promo/Winners/Winners";
import {FaqItem} from "~/components/Layout/Battles/FaqItem/FaqItem";
import * as React from "react";
import {useState} from "react";

export const Promo = () => {
    const [isActive, setActive] = useState(false);
    const [isMain, setMain] = useState(false);
    const [isRegistr, setRegistr] = useState(false);
    const [isAuth, setAuth] = useState(false);
    const [isForgot, setForgot] = useState(false);

    const toggleClass = () => {
        setActive(!isActive);
        setMain(!isMain);
    };
    const toggleReg = () => {
        setRegistr(!isRegistr);
        setMain(!isMain);
    };
    const toggleAuth = () => {
        setAuth(!isAuth);
        setMain(!isMain);
    };
    const toggleForgot = () => {
        setAuth(!isAuth);
        setForgot(!isForgot);
    };
    const allOff = () => {
        setActive(false);
        setMain(false);
        setRegistr(false);
        setAuth(false);
        setForgot(false);
    };


    function detectOS() {
        if (process.browser){
            const platform = navigator.userAgent.toLowerCase(),
              iosPlatforms = ['iphone', 'ipad', 'ipod', 'ipod touch'];
            let res;
            if (platform.includes('iphone')||platform.includes('ipad')) res = 'iOS';
            if (/android/.test(navigator.userAgent.toLowerCase())) res = 'Android';
            return res;
        }
    }

    let adaptiveLink;
        if (detectOS() == 'Android'){
            adaptiveLink = 'https://play.google.com/store/apps/details?id=ru.kfc.kfc_delivery'
        } else if (detectOS() == 'iOS'){
            adaptiveLink = 'https://apps.apple.com/ru/app/kfc-купоны-меню-рестораны/id1074266177'
        } else {
            adaptiveLink = 'https://www.kfc.ru'
        }


    return(
        <div className={css.root}>
            <div className={css.title}>
                <p>
                    <span>выиграй
                    Автомобиль</span> и другие крутые призы!
                </p>
            </div>
            <div className={`${css.btnBlock} ${css.desktopDownload}`}onClick={toggleClass}>
                <CustomButton text={'Загрузить чек'} />
            </div>
            <Tabs click={toggleClass} link={adaptiveLink} />
            <div className={css.more}>
                Больше чеков — больше шансов
            </div>
            <div className={`${css.btnBlock} ${css.mobileDownload}`} onClick={toggleClass}>
                <CustomButton text={'Загрузить чек'} />
            </div>
            <Sliders />
            <div className={css.mainPrize}>
                <img src='images/main/battles/auto.svg' alt='auto' className={css.auto} />
                <div className={css.background}>
                </div>
                <div className={css.prizeTitle}>
                    Главный приз
                </div>
                <div className={css.summ}>
                    Автомобиль
                </div>
                <img src='images/main/battles/miniauto.svg' alt='auto' className={css.miniauto}/>
            </div>
            <div className={css.checkBtn} onClick={toggleClass}>
                <CustomButton text={'Загрузить чек'} />
            </div>
            <Winners />
            <a href="" ></a>
            <div className={css.faq}>
                <div className={css.faqTitle}>
                    faq
                </div>
                <FaqItem num={'01'} subtitle={'Душа моя озарена неземной радостью, как эти чудесные весенние утра, которыми я наслаждаюсь от всего сердца. Я совсем один и блаженствую в здешнем краю, словно созданном для таких, как я.'} />
                <FaqItem num={'02'} subtitle={'Душа моя озарена неземной радостью, как эти чудесные весенние утра, которыми я наслаждаюсь от всего сердца. Я совсем один и блаженствую в здешнем краю, словно созданном для таких, как я.'} />
                <FaqItem num={'03'} subtitle={'Душа моя озарена неземной радостью, как эти чудесные весенние утра, которыми я наслаждаюсь от всего сердца. Я совсем один и блаженствую в здешнем краю, словно созданном для таких, как я.'} />
                <FaqItem num={'04'} subtitle={'Душа моя озарена неземной радостью, как эти чудесные весенние утра, которыми я наслаждаюсь от всего сердца. Я совсем один и блаженствую в здешнем краю, словно созданном для таких, как я.'} />
            </div>
            <div className={css.rules}>
                Общий срок проведения акции 01 марта 2022 года – 31 мая 2022 года, включая срок выдачи призов. Подробная информация об организаторе акции, о правилах ее проведения, количестве призов, сроках, месте и порядке их получения размещена на сайте. Количество призов ограничено. Внешний вид призов может отличаться от их изображений, размещаемых в рекламных материалах акции. Акция действует при наличии товара на полке.
            </div>
            <div className={isActive ? `${css.activeModal} ${css.modal}` : `${css.modal}`}>
                <div className={css.filter}>
                    <div className={isMain ? `${css.mainWindow}` : `${css.none}`}>
                        <svg className={css.xclose} onClick={toggleClass} width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9998 1.44703L1.52954 15.9172L0.0825195 14.4702L14.5527 4.35276e-06L15.9998 1.44703Z" fill="#E4002B"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.47 16.0627L-0.000243638 1.59253L1.44678 0.145508L15.917 14.6157L14.47 16.0627Z" fill="#E4002B"/>
                        </svg>
                        <div className={css.modalTitle}>
                            чтобы участвовать, <br/> необходимо
                        </div>
                        <div className={css.modalBtn} onClick={toggleReg}>
                            <CustomButton text={'Зарегистрироваться'}/>
                        </div>
                        <div className={css.modalBtn} onClick={toggleAuth}>
                            <CustomButton text={'Авторизоваться'} />
                        </div>
                    </div>
                    <div className={isRegistr ? `${css.registration}` : `${css.none}`}>
                        <svg className={css.xclose} onClick={allOff} width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9998 1.44703L1.52954 15.9172L0.0825195 14.4702L14.5527 4.35276e-06L15.9998 1.44703Z" fill="#E4002B"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.47 16.0627L-0.000243638 1.59253L1.44678 0.145508L15.917 14.6157L14.47 16.0627Z" fill="#E4002B"/>
                        </svg>
                        <div className={css.modalTitle}>
                            заполни данные
                        </div>
                        <div className={css.modalSubtitle}>
                            или зарегистрируйся через социальную сеть
                        </div>
                        <div className={css.social}>
                            <a href="#">
                                <img src="images/main/social/VK.svg" alt="vk"/>
                            </a>
                            <a href="#">
                                <img src="images/main/social/instagram.svg" alt="inst"/>
                            </a>
                            <a href="#">
                                <img src="images/main/social/facebook.svg" alt="facebook"/>
                            </a>
                            <a href="#">
                                <img src="images/main/social/ok.svg" alt="ok"/>
                            </a>
                        </div>
                        <div className={css.inputBox}>
                            <input className={css.enter} type="text" placeholder={'Фамилия'}/>
                            <input className={css.enter} type="text" placeholder={'Имя'}/>
                        </div>
                        <input className={css.enter} type="email" name="" id="" placeholder={'E-mail'}/>
                        <input className={css.enter} type="tel" name="" id="" placeholder={'Мобильный телефон'}/>
                        <input className={css.enter} type="password" name="" id="" placeholder={'Пароль'}/>
                        <div className={css.check}>
                            <input type="checkbox" name="agreedGroup" id="agreed" className={css.custom_checkbox}/>
                            <label htmlFor="agreed">Я подтверждаю согласие на обработку своих персональных данных</label>
                        </div>
                        <div className={css.check}>
                            <input type="checkbox" name="agreedGroup" id="agreed2" className={css.custom_checkbox}/>
                            <label htmlFor="agreed2">Я подтверждаю, что ознакомился и согласен с Правилами Акции и Политикой Конфиденциальности </label>
                        </div>
                        <CustomButton text={'Зарегистрироваться'} />
                    </div>
                    <div className={isAuth ? `${css.authorization}` : `${css.none}`}>
                        <svg className={css.xclose} onClick={allOff} width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9998 1.44703L1.52954 15.9172L0.0825195 14.4702L14.5527 4.35276e-06L15.9998 1.44703Z" fill="#E4002B"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.47 16.0627L-0.000243638 1.59253L1.44678 0.145508L15.917 14.6157L14.47 16.0627Z" fill="#E4002B"/>
                        </svg>
                        <div className={css.modalTitle}>
                            вход в личный кабинет
                        </div>
                        <div className={css.modalSubtitle}>
                            введи номер телефона
                        </div>
                        <div className={css.modalText}>
                            или авторизируйся через социальную сеть
                        </div>
                        <div className={css.social}>
                            <a href="#">
                                <img src="images/main/social/VK.svg" alt="vk"/>
                            </a>
                            <a href="#">
                                <img src="images/main/social/instagram.svg" alt="inst"/>
                            </a>
                            <a href="#">
                                <img src="images/main/social/facebook.svg" alt="facebook"/>
                            </a>
                            <a href="#">
                                <img src="images/main/social/ok.svg" alt="ok"/>
                            </a>
                        </div>
                        <input className={css.enter} type="tel" name="" id="" placeholder={'Мобильный телефон'}/>
                        <input className={css.enter} type="password" name="" id="" placeholder={'Пароль'}/>
                        <div className={css.links}>
                            <button onClick={toggleForgot}>Забыли пароль?</button>
                            <button>У меня нет аккаунта</button>
                        </div>
                        <div className={css.check}>
                            <input type="checkbox" name="agreedGroup" id="remember" className={css.custom_checkbox}/>
                            <label htmlFor="remember">Запомнить меня</label>
                        </div>
                        <CustomButton text={'Войти'} />
                    </div>
                    <div className={isForgot ? `${css.forgot}` : `${css.none}`}>
                        <svg className={css.xclose} onClick={allOff} width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9998 1.44703L1.52954 15.9172L0.0825195 14.4702L14.5527 4.35276e-06L15.9998 1.44703Z" fill="#E4002B"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.47 16.0627L-0.000243638 1.59253L1.44678 0.145508L15.917 14.6157L14.47 16.0627Z" fill="#E4002B"/>
                        </svg>
                        <div className={css.modalTitle}>
                            укажи свой e-mail
                        </div>
                        <input type="text" className={css.enter} placeholder={'E-mail'}/>
                        {/*Here's should've been Captcha*/}
                        <CustomButton text={'Отправить пароль'} />
                    </div>
                </div>
            </div>
        </div>
    )
}