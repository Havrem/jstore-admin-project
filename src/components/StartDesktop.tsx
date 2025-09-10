import styles from '@css/StartDesktop.module.scss'
import { AuthBlock } from "./auth/AuthBlock";

export const StartDesktop = () => {
    return (
        <div className={styles.mainContainer}>
            <AuthBlock/>
        </div>
    )
}