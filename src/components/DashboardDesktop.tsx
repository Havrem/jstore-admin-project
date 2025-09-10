import { OrderBlock } from "./OrderBlock"
import styles from '@css/DashboardDesktop.module.scss'

export const DashboardDesktop = () => {
    return (
        <div className={styles.mainContainer}>
            <OrderBlock/>
        </div>
    )
}