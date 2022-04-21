import css from './ContactUs.module.scss';
import { CustomButton } from '~/components/Layout/DefaultLayout/CustomButton/CustomButton';

export const ContactUs = () => {
  return(
    <div className={css.root}>
      <h1 className={css.title}>
        У вас остались вопросы? свяжитесь с нами
      </h1>
      <div className={css.formTitle}>
        Напишите в форму обратной связи, и мы вам обязательно ответим
      </div>
      <form action=''>
        <input type='email' name='' id='' placeholder={'E-mail'} />
        <input type='text' name='' id='' placeholder={'Имя'} />
        <select name='' id=''>
          <option value=''>Выберите тему</option>
        </select>
        <textarea name='' id='' placeholder={'Текст сообщения'}></textarea>
      </form>
      <CustomButton text={'Отправить'} />
      <div className={css.chat}>
        <button>
          <img src='images/main/message.png' alt='message' />
          <div className={css.btnText}>
            <div className={css.ask}>
              Задайте вопрос чат-боту
            </div>
            <div className={css.open}>
              открыть диалог с чат-ботом
            </div>
          </div>
        </button>
      </div>
      <div className={css.socials}>
        <div className={css.socialsTitle}>
          Напишите нам в соц.сети:
        </div>
        <div className={css.socialLinks}>
          <a href='https://vk.com/kfc_battle' target={"_blank"}>
            <img src='images/main/social/VK.svg' alt='vk' />
          </a>
          <a href='https://www.tiktok.com/@kfc_battle' target={"_blank"}>
            <img src='images/main/social/tiktok.svg' alt='tiktok' />
          </a>
          <a href='https://www.instagram.com/kfc_battle/' target={"_blank"}>
            <img src='images/main/social/instagram.svg' alt='insta' />
          </a>
        </div>
      </div>
    </div>
  )
}