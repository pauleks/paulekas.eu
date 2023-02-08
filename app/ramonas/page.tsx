import styles from '@css/Ramonas.module.css'

export default function Ramonas() {
    return (
        <>
            <video className={styles.video} src="/ramonas.mp4" controls loop></video>
        </>
    );
};