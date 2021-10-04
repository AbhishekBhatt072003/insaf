import styles from '../../styles/components/Wildlfie/poster.module.css'

export default function WildlifePoster() {
    return (
        <div className={`${styles.poster}`}>
            <img className={`${styles.posterImage}`} src="/images/img5.jpeg" />
            <h1 className={`${styles.posterText}`}>Rajasthan is the heaven of the tigers and many endangered species.</h1>
        </div>
    )
}

// className = {`${styles.}`}