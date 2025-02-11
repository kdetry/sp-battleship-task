import { TShipData } from "../../state/shipsAtom";

type TShipShotInfo = {
    ship: TShipData;
    hitPositions: Array<string>;
}

export const ShipShotInfo = ({ ship, hitPositions }: TShipShotInfo) => {
    const hitCount = hitPositions.filter(position => ship.positionsWithKeys.includes(position)).length;

    return (
        <span>
            {Array.from({ length: hitCount }, () => (
                <>X</>
            ))}
            {Array.from({ length: ship.positionsWithKeys.length - hitCount }, () => (
                <>O</>
            ))}
        </span>
    )
}