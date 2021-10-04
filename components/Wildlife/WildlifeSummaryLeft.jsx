import styles from '../../styles/components/Wildlfie/WildlifeSummary.module.css'
import WildlifeImage from './WildlifeImage'
import WildlifeDescription from './WildlifeDescription'

export default function WildlifeSummaryRight() {

    return (
        <div className={`${styles.summaryBox}`}>
            <WildlifeImage />
            <WildlifeDescription />
        </div>
    )

}