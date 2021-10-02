import styles from '../styles/components/Footer.module.css'
import SocailIcons from './SubComponents/SocialIcons'

export default function Footer() {
    return (
        <footer className={`${styles.footerWrapper}`}>



            <div className={`${styles.footerContent}`}>

                <div className={`${styles.beforeLogo}`}>
                    <ul className={`${styles.leftItems}`}>
                        <li className={`${styles.footerLeftItems}`}><a className={`${styles.commonClass} ${styles.faq}`} href="#">FAQs</a></li>
                        <li className={`${styles.footerLeftItems}`}><a className={`${styles.commonClass} ${styles.reports}`} href="#">Annual Reports</a></li>
                        <li className={`${styles.footerLeftItems}`}><a className={`${styles.commonClass} ${styles.policy}`} href="#">Privacy Policy</a></li>
                    </ul>
                </div>
                <h1 className={`${styles.logo}`}>
                    <h1 >
                        Insaf
                        <br />
                        <span className={`${styles.logoSpan}`}>
                            Sansthan
                        </span>
                    </h1>
                </h1>
                <div className={`${styles.afterLogo}`}>
                    <ul className={`${styles.rightItems}`}>
                        <li className={`${styles.footerRightItems}`}><a className={`${styles.commonClass} ${styles.blog}`} href="#">Blogs/Posts</a></li>
                        <li className={`${styles.footerRightItems}`}><a className={`${styles.commonClass} ${styles.envolved}`} href="#">Get Envolved</a></li>
                        <li className={`${styles.footerRightItems}`}><a className={`${styles.commonClass} ${styles.contact}`} href="#">Contact Us</a></li>
                    </ul>
                </div>

            </div>


            <SocailIcons />

        </footer>
    );
}

