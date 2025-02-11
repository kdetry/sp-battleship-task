import { useMemo } from "react";
import styles from "./BoardCell.module.css"
import { ShotIcon } from "./ShotIcon";

export type BoardCellProps = {
    isShot: boolean;
    isShip: boolean;
    onClick: () => void;
    size: number;
}

export const BoardCell = ({ isShot, isShip, onClick, size }: BoardCellProps) => {
    const conditionalStyle = useMemo(() => isShot ? isShip ? styles.isShotShip : styles.isShot : "", [isShot, isShip])
    const shotIconSize = useMemo(() => size / 2, [size])
    return (
        <div className={`${styles.boardCell} ${conditionalStyle}`} onClick={onClick} style={{ width: size, height: size }}>
            {isShot && <ShotIcon width={shotIconSize} height={shotIconSize} color={isShip ? "red" : "#000"} />}
        </div>
    )
}