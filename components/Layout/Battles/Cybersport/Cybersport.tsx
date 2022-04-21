import css from './Cybersport.module.scss';
import { Tabs } from '~/components/Layout/Battles/Cybersport/Tabs/Tabs';
import { Partners } from '~/components/Layout/DefaultLayout/Partners/Partners';
import { CustomButton } from '~/components/Layout/DefaultLayout/CustomButton/CustomButton';
import {useState} from "react";
import * as React from "react";

export const Cybersport = () => {
  const [isActive, setActive] = useState(false);
  const [isMain, setMain] = useState(false);
  const [isFaceit, setFaceit] = useState(false);
  const [isJoin, setJoin] = useState(false);

    const toggleClass = () => {
        setActive(!isActive);
        setMain(!isMain);
    };
    const toggleFaceit = () => {
        setFaceit(!isFaceit);
        setMain(!isMain);
    }
    const toggleJoin = () => {
        setJoin(!isJoin);
        setFaceit(!isFaceit);
    }

    const AllOff = () => {
        setActive(false);
        setMain(false);
        setFaceit(false);
        setJoin(false);
    }

  return(
    <div className={css.root}>
      <h1 className={css.title}>
        КИБЕРСПОРТ
      </h1>
      <h2 className={css.subtitle}>
          Заяви о своей команде на всю киберспортивную тусовку! А помогут тебе в этом Топ-стримеры Twitch — Buster и Ramzes666!
      </h2>
      <div className={css.btnBlock} onClick={toggleClass}>
        <CustomButton text={'Участвовать'} />
      </div>
      <Tabs click={toggleClass} />
      <div className={`${css.btnBlock} ${css.middle}`} onClick={toggleClass}>
        <CustomButton text={'Участвовать'} />
      </div>
      {/*<Partners />*/}
        <div className={isActive ? `${css.activeModal} ${css.modal}` : `${css.modal}`}>
            <div className={css.filter}>
                <div className={isMain ? `${css.mainModal}`: `${css.none}`}>
                    <svg className={css.xclose} onClick={toggleClass} width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9998 1.44703L1.52954 15.9172L0.0825195 14.4702L14.5527 4.35276e-06L15.9998 1.44703Z" fill="#E4002B"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.47 16.0627L-0.000243638 1.59253L1.44678 0.145508L15.917 14.6157L14.47 16.0627Z" fill="#E4002B"/>
                    </svg>
                    <div className={css.modalTitle}>
                        чтобы подать заявку, <br/> необходимо
                    </div>
                    <div onClick={toggleFaceit}>
                        <CustomButton text={'Авторизоваться через FaceIt'}  />
                    </div>
                    <a href={'https://www.faceit.com/ru'} target={'_blank'} className={css.forgot}>
                        У меня нет аккаунта FaceIT
                    </a>
                </div>
                <div className={isFaceit ? `${css.signup}` : `${css.none}`}>
                    <svg className={css.xclose} onClick={AllOff} width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9998 1.44703L1.52954 15.9172L0.0825195 14.4702L14.5527 4.35276e-06L15.9998 1.44703Z" fill="#E4002B"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.47 16.0627L-0.000243638 1.59253L1.44678 0.145508L15.917 14.6157L14.47 16.0627Z" fill="#E4002B"/>
                    </svg>
                    <div className={css.modalTitle}>
                        чтобы подать заявку, <br/> необходимо
                    </div>
                    <input className={css.enter} type="text" placeholder={'Укажите название команды'}/>
                    <input className={css.enter} type="text" placeholder={'Укажите ссылку на команду'}/>
                    <div className={css.check}>
                        <input type="checkbox" name="employee" id="employee" className={css.custom_checkbox}/>
                        <label htmlFor="employee">Я сотрудник KFC</label>
                    </div>
                    <input className={css.enter} type="text" placeholder={'Ввести код'}/>
                    <div onClick={toggleJoin}>
                        <CustomButton text={'Отправить'} />
                    </div>
                </div>
                <div className={isJoin ? `${css.join}`: `${css.none}`}>
                    <svg className={css.xclose} onClick={AllOff} width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9998 1.44703L1.52954 15.9172L0.0825195 14.4702L14.5527 4.35276e-06L15.9998 1.44703Z" fill="#E4002B"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.47 16.0627L-0.000243638 1.59253L1.44678 0.145508L15.917 14.6157L14.47 16.0627Z" fill="#E4002B"/>
                    </svg>
                    <div className={css.modalTitle}>
                        отлично! осталось <br/>
                        присоединиться <br/>
                        к турниру kfc battle
                    </div>
                    <CustomButton text={'присоединиться DOTA 2'} />
                    <CustomButton text={'присоединиться CS:GO'} />
                </div>
            </div>
        </div>
    </div>
  )
}