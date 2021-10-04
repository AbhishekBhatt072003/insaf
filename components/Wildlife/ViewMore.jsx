import styles from '../../styles/components/Wildlfie/ViewMore.module.css';


export default function PrimaryButton(props) {

    return (
        <a className={`${styles.viewLink}`} href="#">
            <button className={`${styles.viewButton}`}>View More</button>
        </a>
    );

}