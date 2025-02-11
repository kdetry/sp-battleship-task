import { useAtom, useSetAtom } from "jotai";
import { GAME_BOARD_HEIGHT, GAME_BOARD_WIDTH } from "../../constants/AppConstants";
import { historyAtom } from "../../state/historyAtom";
import { getBoardCellKey } from "../../utils/getBoardCellKey";
import { BoardCell } from "./BoardCell";
import { useEffect, useMemo, useState } from "react";
import styles from "./GameBoard.module.css"
import { shipsAtom } from "../../state/shipsAtom";

export const GameBoard = () => {
    const [history, setHistory] = useAtom(historyAtom);
    const [ships] = useAtom(shipsAtom);

    const [boardCellSize, setBoardCellSize] = useState(0);

    const shipCells = ships.flatMap(ship => ship.positionsWithKeys);

    const onCellClick = (row: number, col: number) => {
        const cellKey = getBoardCellKey(row, col);
        setHistory([...history, cellKey]);
    }

    const isGameOver = useMemo(() => shipCells.every(cell => history.includes(cell)), [history, shipCells]);


    useEffect(() => {
        const handleResize = () => {
            const height = window.innerHeight;
            const width = window.innerWidth;
            // Use 90% of the viewport's smaller dimension
            const availableSpace = Math.min(height, width) * 0.8;
            // Divide by the larger board dimension to maintain square cells
            const cellSize = availableSpace / Math.max(GAME_BOARD_HEIGHT, GAME_BOARD_WIDTH);
            setBoardCellSize(cellSize);
        }
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className={styles.gameBoard}>
            <div className={styles.gameBoardContainer}>
                {Array.from({ length: GAME_BOARD_HEIGHT }, (_, rowIndex) => (
                    <div key={rowIndex} className={styles.row}>
                        {Array.from({ length: GAME_BOARD_WIDTH }, (_, cellIndex) => {
                            const cellKey = getBoardCellKey(rowIndex, cellIndex);
                            return <BoardCell
                                key={cellKey}
                                isShot={history.includes(cellKey)}
                                isShip={shipCells.includes(cellKey)}
                                onClick={() => onCellClick(rowIndex, cellIndex)}
                                size={boardCellSize} />
                        })}
                    </div>
                ))}
            </div>
            {isGameOver && <div>Game Over</div>}
        </div>
    )
}