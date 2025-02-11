import { useEffect } from "react";
import { SHIP_LAYOUT_DATA } from "../constants/DataConstants";
import { shipsAtom } from "../state/shipsAtom";
import { useSetAtom } from "jotai";
import { getBoardCellKey } from "../utils/getBoardCellKey";

export const useInitializeGame = () => {
    const setShips = useSetAtom(shipsAtom);

    useEffect(() => {
        const shipData = SHIP_LAYOUT_DATA.layout.map(ship => ({
            shipType: ship.ship,
            positions: ship.positions as [number, number][],
            positionsWithKeys: ship.positions.map(position => getBoardCellKey(position[0], position[1])),
            hitPositions: []
        }));

        setShips(shipData); 
    }, [])
}   