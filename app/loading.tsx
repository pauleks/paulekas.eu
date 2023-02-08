import styles from '@css/Loading.module.css'
import AnimatedLoadingText from '@components/misc/AnimatedLoading'

export default function Loading() {
    return (
        <>
            <div className={styles.base}>
                <p><AnimatedLoadingText /></p>
            </div>
        </>
    )
}