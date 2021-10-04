import styles from '../../styles/components/Wildlfie/WildlifeImage.module.css';



export default function WildlifeImage(props) {
    return (
        <div className={`${styles.imageWrapper}`}>
            <img className={`${styles.image}`} src="/images/wild2.jpg" />
            {/* <div className={`${styles.imageMiddle}`}>
                <button></button>
            </div> */}
        </div>
    );
}