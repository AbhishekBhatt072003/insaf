import styles from '../../styles/components/SocialIcons.module.css'


var year = new Date().getFullYear();
console.log(year)
export default function SocialIcons() {
    return (
        <div className={`${styles.socialLinks}`}>
            {/* social Icons */}
            <div className={`${styles.socialIcons}`}>
                <a href="_blank" className="fa fa-facebook"></a>
                <a href="_blank" className="fa fa-twitter"></a>
                <a href="_blank" className="fa fa-instagram"></a>
                <a href="_blank" className="fa fa-youtube"></a>
            </div>

            {/* copyright text */}
            <div className={`${styles.copyright}`}>
                ©{year} Copyright  |  All Rights Reserved  |  <span>Insaf Sansthan</span>
            </div>
        </div>
    );
}
