import css from './Plug.module.scss';

export const Plug = () => {
    return(
        <div className={css.root}>
            <a className={css.logo} href="./">
                <img src="images/main/logo.svg" alt="logo"/>
            </a>
            <div className={css.content}>
                <div className={css.text}>
                    <h1 className={css.title}>
                        Сайт обновляется <br/>
                        <span>
                            Следите за новостями в соц. сетях
                        </span>
                    </h1>
                    <div className={css.socials}>
                        <a href="https://vk.com/kfc_battle" target={'_blank'}>
                            <img src="images/main/plug/vk.svg" alt="social"/>
                        </a>
                        <a href="https://www.tiktok.com/@kfc_battle" target={'_blank'}>
                            <img src="images/main/plug/tiktok.svg" alt="social"/>
                        </a>
                        <a href="https://www.instagram.com/kfc_battle/" target={'_blank'}>
                            <img src="images/main/plug/instagram.svg" alt="social"/>
                        </a>
                    </div>
                    <div className={css.tag}>
                        KFC BATTLE 2022
                    </div>
                </div>
                <div className={css.basket}>
                    <img src="images/main/plug/basket.png" alt="basket" />
                </div>
            </div>
            <footer>
                <div className={css.copyright}>
                    © 2021 KFC International <br/> Holdings Inc.
                </div>
            </footer>
        </div>
    )
}