import { SHIP_LAYOUT_DATA } from "../../constants/DataConstants"
import styles from "./Information.module.css"
import { useAtom } from "jotai";
import { shipsAtom } from "../../state/shipsAtom";
import { historyAtom } from "../../state/historyAtom";
import { ShipShotInfo } from "./ShipShotInfo";

export const Information = () => {
    const [ships] = useAtom(shipsAtom);
    const [history] = useAtom(historyAtom);

    const hitPositions = ships.flatMap(ship => ship.positionsWithKeys.filter(position => history.includes(position)));

    return (
        <div className={styles.information}>
            {ships.map((ship) => (
                <div className={styles.ship} key={ship.shipType}>
                    <h2>{ship.shipType}</h2>
                    <ShipShotInfo ship={ship} hitPositions={hitPositions} />
                </div>
            ))}
        </div>
    )
}