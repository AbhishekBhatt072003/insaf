import styles from '../../styles/components/ReachUs/ReachUs.module.css'
import ContactSection from './ContactSection'





export default function ReachUs(props) {
    return (
        <section className={`${styles.section}`} >

            <h2 className={`${styles.sectionTitle}`} >Get in touch</h2>
            {/* <span className={`${styles.sectionSubtitle}`} >Get in touch</span> */}
            <ContactSection phoneNumber="1234567890" email="something#@123" address="hsdajf" />

        </section>
    )
}



// className = {`${styles.}`}