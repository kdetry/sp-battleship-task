import { GameBoard } from "../GameBoard/GameBoard"
import { Information } from "../Information/Information"
import styles from "./Layout.module.css"

export const Layout = () => {
    return (
        <div className={styles.layout}>
            <Information />
            <GameBoard />
        </div>
    )
}