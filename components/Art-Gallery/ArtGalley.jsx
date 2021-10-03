import styles from '../../styles/components/Art-Gallery/ArtGallery.module.css'

export default function ArtGallery() {
    return (
        <div className={`${styles.containerGallery}`}>
            <div className={`${styles.galleryHeading}`}>
                <h1 className={`${styles.galleryHeadingText}`}>
                    Art <span className={`${styles.galleryHeadingSpan}`}>Gallery</span>
                </h1>
            </div>
            <div className={`${styles.gallery}`}>
                <div className={`${styles.box}`}>
                    <img className={`${styles.galleryImage}`} src="/images/img6.jpeg" />
                    <img className={`${styles.galleryImage}`} src="/images/img7.jpeg" />
                    <img className={`${styles.galleryImage}`} src="/images/img3.jpg" />
                    <img className={`${styles.galleryImage}`} src="/images/img3.jpg" />
                    <img className={`${styles.galleryImage}`} src="/images/img1.jpg" />
                </div>
                <div className={`${styles.box}`}>
                    <img className={`${styles.galleryImage}`} src="/images/img5.jpeg" />
                    <img className={`${styles.galleryImage}`} src="/images/img7.jpeg" />
                    <img className={`${styles.galleryImage}`} src="/images/img6.jpeg" />
                    <img className={`${styles.galleryImage}`} src="/images/img.jpeg" />
                </div>
                <div className={`${styles.box}`}>
                    <img className={`${styles.galleryImage}`} src="/images/img1.jpg" />
                    <img className={`${styles.galleryImage}`} src="/images/img6.jpeg" />
                    <img className={`${styles.galleryImage}`} src="/images/img1.jpg" />
                    <img className={`${styles.galleryImage}`} src="/images/img2.jpg" />
                    <img className={`${styles.galleryImage}`} src="/images/img4.jpg" />
                    {/* <img className={`${styles.galleryImage}`} src="/images/img4.jpg" /> */}
                </div>
            </div>
        </div>
    )

}

// className = {`${styles.galleryImage}`}