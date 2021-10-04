import styles from '../../styles/components/Wildlfie/WildlifeDescription.module.css';
import ViewMore from './ViewMore'

export default function WildlifeDescription() {
    return (
        <div className={`${styles.descriptionBox}`}>
            <h2 className={`${styles.descriptionHeading}`}>Hello</h2>
            <p className={`${styles.descriptionText}`}>Hello</p>
            <ViewMore />
        </div>
    )
}