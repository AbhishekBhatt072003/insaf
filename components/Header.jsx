import styles from '../styles/components/Header.module.css'

export default function Header() {
    return (
        <header className={`${styles.headerWrapper}`}>
            <h1 className={`${styles.logo}`}>Insaf <span className={`${styles.logoSpan}`}>Sansthan</span></h1>
            <nav>
                <ul className={`${styles.navLinks}`}>


                    <li className={` ${styles.listItem}`}><a className={` ${styles.tabs}`} href="#">Home</a></li>
                    <li className={` ${styles.listItem}`}><a className={` ${styles.tabs}`} href="#">Our Story</a></li>

                    {/* Activities */}
                    <li className={`${styles.dropDown} ${styles.listItem}`}>
                        <a className={` ${styles.tabs}`} href="#">Activities</a>
                        <ul className={`${styles.secondaryList}`}>
                            <li className={`${styles.secondaryListItem}`}><a className={` ${styles.tabs}`} href="#">Art Tour</a></li>
                            <li className={`${styles.secondaryListItem}`}><a className={` ${styles.tabs}`} href="#">Craft Tour</a></li>
                            <li className={`${styles.secondaryListItem}`}><a className={` ${styles.tabs}`} href="#">Wildlife Tour</a></li>
                        </ul>
                    </li>

                    {/* About us  */}
                    <li className={`${styles.dropDown} ${styles.listItem}`}>
                        <a className={` ${styles.tabs}`} href="#">About Us</a>
                        <ul className={`${styles.secondaryList}`}>
                            <li className={`${styles.secondaryListItem}`}><a className={` ${styles.tabs}`} href="#">Insaf Sansthan</a></li>
                            <li className={`${styles.secondaryListItem}`}><a className={` ${styles.tabs}`} href="#">Founder</a></li>
                            <li className={`${styles.secondaryListItem}`}><a className={` ${styles.tabs}`} href="#">Our Team</a></li>
                        </ul>
                    </li>



                    <li className={` ${styles.listItem}`}><a className={` ${styles.tabs}`} href="#">Blog</a></li>
                    <li className={` ${styles.listItem}`}><a className={` ${styles.tabs}`} href="#">Art Gallery</a></li>


                    {/* Contact us  */}
                    <li className={`${styles.dropDown} ${styles.listItem}`}>
                        <a className={` ${styles.tabs}`} href="#">Contact Us</a>
                        <ul className={`${styles.secondaryList}`}>
                            <li className={`${styles.secondaryListItem}`}><a className={` ${styles.tabs}`} href="#">Work With us </a></li>
                            <li className={`${styles.secondaryListItem}`}><a className={` ${styles.tabs}`} href="#">Reach Us</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>

            <a className={``}><button className={`commonClass ${styles.donateButton}`}>Donate Us</button></a>
        </header>
    )
}

