import css from './Feedback.module.scss';
import * as React from "react";
import {useState} from "react";

export const Feedback = () => {
    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
        setActive(!isActive);
    };
    return(
        <div className={css.root}>
            <button onClick={toggleClass}>
                <img src='images/main/feedback.svg' alt='feedback' />
            </button>
            <div className={isActive ? `${css.chat} ${css.chatActive}` : `${css.chat}`}>
                <button onClick={toggleClass} className={css.xclose}>
                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.9998 1.44703L1.52954 15.9172L0.0825195 14.4702L14.5527 4.35276e-06L15.9998 1.44703Z" fill="#E4002B"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.47 16.0627L-0.000243638 1.59253L1.44678 0.145508L15.917 14.6157L14.47 16.0627Z" fill="#E4002B"/>
                    </svg>
                </button>
                <img className={css.chatHeader} src="images/main/chat.png" alt="header"/>
                <div className={css.messenger}>
                    <div className={`${css.botMessage} ${css.message}`}>
                        Добро пожаловать в чат-бот. Какой вопрос ты хочешь задать?
                    </div>
                    <div className={`${css.userMessage} ${css.message}`}>
                        Вопросы по батлу
                    </div>
                </div>
                <div className={css.controls}>
                    <button>
                        вопросы по батлу
                    </button>
                    <button>
                        вопросы по промо
                    </button>
                    <button>
                        правила kfc battle
                    </button>
                </div>
                <input type="text" placeholder={'Введите сообщение'}/>
                <button className={css.send}>
                    <p>Отправить сообщение</p>
                    <img src="images/main/message.svg" alt="message"/>
                </button>
            </div>
        </div>
    )
}