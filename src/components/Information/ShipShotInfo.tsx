import { TShipData } from "../../state/shipsAtom";
import { ElementOf } from "../../utils/type/ElementOf";

type TShipShotInfo = {
    ship: TShipData;
    hitPositions: Array<string>;
}

export const ShipShotInfo = ({ ship, hitPositions }: TShipShotInfo) => {
    const hitCount = hitPositions.filter(position => ship.positionsWithKeys.includes(position)).length;

    return (
        <span>
            {Array.from({ length: hitCount }, (_, index) => (
                <>X</>
            ))}
            {Array.from({ length: ship.positionsWithKeys.length - hitCount }, (_, index) => (
                <>O</>
            ))}
        </span>
    )
}