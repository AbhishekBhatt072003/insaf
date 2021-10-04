import styles from '../../styles/components/ReachUs/ContactSection.module.css'


export default function ContactSection(props) {
    return (

        <div>
            <div className={`${styles.contactInformation}`} >
                <i className={`${styles.contactIcon} uil uil-phone `} ></i>

                <div>
                    <h3 className={`${styles.contactTitle}`} >Call Us</h3>
                    <span className={`${styles.contactSubtitle}`} >{props.phoneNumber}</span>
                </div>
            </div>

            <div className={`${styles.contactInformation}`}>
                <i className={`${styles.contactIcon} uil uil-envelope `} ></i>

                <div>
                    <h3 className={`${styles.contactTitle}`} >Email Us</h3>
                    <span className={`${styles.contactSubtitle}`} >{props.email}</span>
                </div>
            </div>

            <div className={`${styles.contactInformation}`} >
                <i className={`${styles.contactIcon} uil uil-map-marker`} ></i>

                <div>
                    <h3 className={`${styles.contactTitle}`} >My Location</h3>
                    <span className={`${styles.contactSubtitle}`} >{props.address}</span>
                </div>
            </div>
        </div>
    )
}


// className = {`${styles.}`}