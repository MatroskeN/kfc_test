import css from './Social.module.scss';
import { Partners } from '~/components/Layout/DefaultLayout/Partners/Partners';
import { Tabs } from '~/components/Layout/Battles/Social/Tabs/Tabs';
import { CustomButton } from '~/components/Layout/DefaultLayout/CustomButton/CustomButton';
import { Mentors } from '~/components/Layout/Battles/Social/Mentors/Mentors';
import * as React from "react";
import {useState} from "react";

export const Social = () => {
    const [isActive, setActive] = useState(false);
    const [isMain, setMain] = useState(false);
    const [isResume, setResume] = useState(false);
    const [isDescription, setDescription] = useState(false);
    const [isBudget, setBudget] = useState(false);
    const [isReference, setReference] = useState(false);

    const toggleClass = () => {
        setActive(!isActive);
        setMain(!isMain);
    };
    const toggleResume = () => {
        setResume(!isResume);
        setMain(!isMain);
    }
    const toggleDescription = () => {
        setDescription(!isDescription);
        setResume(!isResume);
    }
    const toggleBudget = () => {
        setBudget(!isBudget);
        setDescription(!isDescription);
    }
    const toggleReference = () => {
        setReference(!isReference);
        setBudget(!isBudget);
    };

    const AllOff = () => {
        setActive(false);
        setMain(false);
        setResume(false);
        setDescription(false);
        setBudget(false);
        setReference(false);
    };

  return(
    <div className={css.root}>
      <h1 className={css.title}>
        Волонтерство
      </h1>
      <h2 className={css.subtitle}>
        <p>
            Лови шанс реализовать свой социальный проект с KFC BATTLE!
        </p>
      </h2>
      <div className={css.btnBlock} onClick={toggleClass}>
        <CustomButton text={'Участвовать'} />
      </div>
      <Tabs />
      <div className={`${css.btnBlock} ${css.middle}`} onClick={toggleClass}>
        <CustomButton text={'Участвовать'} />
      </div>
      <div className={css.video}>
        <div className={css.background}></div>
        <div className={css.videoTitle}>
          Видеопример
        </div>
        <video src='' poster={'images/main/battles/example.png'}></video>
      </div>
      <Mentors />
      {/*<Partners />*/}
        <div className={isActive ? `${css.activeModal} ${css.modal}` : `${css.modal}`}>
            <div className={css.filter}>
                <div className={isMain ? `${css.mainWindow}` : `${css.none}`}>
                    <svg className={css.xclose} onClick={toggleClass} width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9998 1.44703L1.52954 15.9172L0.0825195 14.4702L14.5527 4.35276e-06L15.9998 1.44703Z" fill="#E4002B"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.47 16.0627L-0.000243638 1.59253L1.44678 0.145508L15.917 14.6157L14.47 16.0627Z" fill="#E4002B"/>
                    </svg>
                    <div className={css.modalTitle}>
                        заявка на участие
                    </div>
                    <div className={css.modalSubtitle}>
                        часть 1. регистрационные данные
                    </div>
                    <div className={css.inputBox}>
                        <input className={css.enter} type="text" placeholder={'Фамилия'}/>
                        <input className={css.enter} type="text" placeholder={'Имя'}/>
                    </div>
                    <input className={css.enter} type="email" name="" id="" placeholder={'E-mail'}/>
                    <input className={css.enter} type="tel" name="" id="" placeholder={'Мобильный телефон'}/>
                    <input className={css.enter} type="password" name="" id="" placeholder={'Пароль'}/>
                    <div className={css.check}>
                        <input type="checkbox" name="employeeGroup" id="employee" className={css.custom_checkbox}/>
                        <label htmlFor="employee">
                            <span>Я сотрудник KFC</span>
                        </label>
                    </div>
                    <input className={css.enter} type="text" placeholder={'Ввести код'}/>
                    <div className={css.check}>
                        <input type="checkbox" name="agreedGroup" id="agreed" className={css.custom_checkbox}/>
                        <label htmlFor="agreed">Я подтверждаю согласие на обработку своих персональных данных</label>
                    </div>
                    <div className={css.check}>
                        <input type="checkbox" name="agreedGroup" id="agreed2" className={css.custom_checkbox}/>
                        <label htmlFor="agreed2">Я подтверждаю, что ознакомился и согласен с Правилами Акции и Политикой Конфиденциальности </label>
                    </div>
                    <div className={css.btnModal} onClick={toggleResume}>
                        <CustomButton text={'Далее'} />
                    </div>
                    <div className={css.counter}>
                        <span></span>
                        <p>1/5</p>
                    </div>
                </div>
                <div className={isResume ? `${css.resume}` : `${css.none}`}>
                    <svg className={css.xclose} onClick={AllOff} width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9998 1.44703L1.52954 15.9172L0.0825195 14.4702L14.5527 4.35276e-06L15.9998 1.44703Z" fill="#E4002B"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.47 16.0627L-0.000243638 1.59253L1.44678 0.145508L15.917 14.6157L14.47 16.0627Z" fill="#E4002B"/>
                    </svg>
                    <div className={css.modalTitle}>
                        заявка на участие
                    </div>
                    <div className={css.modalSubtitle}>
                        часть 2. резюме проекта
                    </div>
                    <textarea name="" id="" placeholder={'Название проекта'}>
                    </textarea>
                    <select name="" id="">
                        <option value="">Направление</option>
                    </select>
                    <textarea name="" id="" placeholder={'Краткое описание проекта (2-3 предложения)'}>
                    </textarea>
                    <input className={css.enter} type="text" placeholder={'Город реализации'}/>
                    <input className={css.enter} type="text" placeholder={'Срок реализации'}/>
                    <input className={css.enter} type="text" placeholder={'Бюджет проекта'}/>
                    <textarea name="" id="" placeholder={'Партнеры проекта ( продтвержденные и предполагаемые)'}>
                    </textarea>
                    <div className={css.btnModal} onClick={toggleDescription}>
                        <CustomButton text={'Далее'} />
                    </div>
                    <div className={css.counter}>
                        <span></span>
                        <p>2/5</p>
                    </div>
                </div>
                <div className={isDescription ? `${css.description}` : `${css.none}`}>
                    <svg className={css.xclose} onClick={AllOff} width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9998 1.44703L1.52954 15.9172L0.0825195 14.4702L14.5527 4.35276e-06L15.9998 1.44703Z" fill="#E4002B"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.47 16.0627L-0.000243638 1.59253L1.44678 0.145508L15.917 14.6157L14.47 16.0627Z" fill="#E4002B"/>
                    </svg>
                    <div className={css.modalTitle}>
                        заявка на участие
                    </div>
                    <div className={css.modalSubtitle}>
                        часть 2. резюме проекта
                    </div>
                    <textarea name="" id="" placeholder={'Цели и задачи проекта'}>
                    </textarea>
                    <textarea name="" id="" placeholder={'Целесообразность и актуальность проекта'}>
                    </textarea>
                    <input className={css.enter} type="text" placeholder={'Целевые аудитории проекта'}/>
                    <textarea name="" id="" placeholder={'Содержание проекта'}>
                    </textarea>
                    <textarea name="" id="" placeholder={'Этапы реализации проекта с указанием точных временных рамок и отвественных лиц на каждом этапе'}>
                    </textarea>
                    <textarea name="" id="" placeholder={
                        'Информационная поддержка проекта: этапы, ключевые мероприятия, какие каналы и СМИ будут задействованы\n' +
                        '\n' +
                        '(если не запланирована информационная поддержка, так и указываем)'
                    }>
                    </textarea>
                    <textarea name="" id="" placeholder={'Ожидаемый результат. Количественные и качественные показатели'}>
                    </textarea>
                    <div className={css.btnModal} onClick={toggleBudget}>
                        <CustomButton text={'Далее'} />
                    </div>
                    <div className={css.counter}>
                        <span></span>
                        <p>3/5</p>
                    </div>
                </div>
                <div className={isBudget ? `${css.budget}` : `${css.none}`}>
                    <svg className={css.xclose} onClick={AllOff} width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9998 1.44703L1.52954 15.9172L0.0825195 14.4702L14.5527 4.35276e-06L15.9998 1.44703Z" fill="#E4002B"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.47 16.0627L-0.000243638 1.59253L1.44678 0.145508L15.917 14.6157L14.47 16.0627Z" fill="#E4002B"/>
                    </svg>
                    <div className={css.modalTitle}>
                        заявка на участие
                    </div>
                    <div className={css.modalSubtitle}>
                        часть 4. бюджет проекта
                    </div>
                    <textarea name="" id="" placeholder={'Цели и задачи проекта'}>
                    </textarea>
                    <textarea name="" id="" placeholder={'Целесообразность и актуальность проекта'}>
                    </textarea>
                    <div className={css.btnModal} onClick={toggleReference}>
                        <CustomButton text={'Далее'} />
                    </div>
                    <div className={css.counter}>
                        <span></span>
                        <p>4/5</p>
                    </div>
                </div>
                <div className={isReference ? `${css.reference}` : `${css.none}`}>
                    <svg className={css.xclose} onClick={AllOff} width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9998 1.44703L1.52954 15.9172L0.0825195 14.4702L14.5527 4.35276e-06L15.9998 1.44703Z" fill="#E4002B"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.47 16.0627L-0.000243638 1.59253L1.44678 0.145508L15.917 14.6157L14.47 16.0627Z" fill="#E4002B"/>
                    </svg>
                    <div className={css.modalTitle}>
                        заявка на участие
                    </div>
                    <div className={css.modalSubtitle}>
                        часть 4. бюджет проекта
                    </div>
                    <textarea name="" id="" placeholder={'Род деятельности на день заполнения заявки'}>
                    </textarea>
                    <input className={css.enter} type="text" placeholder={'Являетесь ли вы волонтером?'}/>
                    <textarea name="" id="" placeholder={'Был ли у тебя опыт организации волонтерских проектов?'}>
                    </textarea>
                    <textarea name="" id="" placeholder={'Команда проекта. С кем ты планируешь реализовывать свой проект?'}>
                    </textarea>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.99578 10.5623L6.43323 11.2092L5.99578 11.505L5.55834 11.2092L5.99578 10.5623ZM5.21486 0.990967L5.21486 0.210043L6.77671 0.210043L6.77671 0.990967L5.21486 0.990967ZM11.1513 8.01873L6.43323 11.2092L5.55834 9.91535L10.2764 6.72492L11.1513 8.01873ZM5.55834 11.2092L0.840255 8.01873L1.71514 6.72492L6.43323 9.91535L5.55834 11.2092ZM5.21486 10.5623L5.21486 0.990967L6.77671 0.990967L6.77671 10.5623L5.21486 10.5623Z" fill="#E4002B"/>
                    </svg>
                    <div className={css.contactTitle}>
                        контакты для связи:
                    </div>
                    <div className={css.inputBox}>
                        <input className={css.enter} type="text" placeholder={'Фамилия'}/>
                        <input className={css.enter} type="text" placeholder={'Имя'}/>
                    </div>
                    <div className={css.upload}>
                        <input type="file" name="" id=""/>
                        <div className={css.mask}>
                            <div className={css.minus}></div>
                            <div className={css.upVideo}>Загрузите видео</div>
                        </div>
                    </div>
                    <div className={css.btnModal} onClick={AllOff}>
                        <CustomButton text={'Далее'} />
                    </div>
                    <div className={css.counter}>
                        <span></span>
                        <p>5/5</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}