import { atom } from "jotai";

export type TShipData = {
    shipType: string;
    positions: Array<[number, number]>;
    positionsWithKeys: Array<string>;
    //hitPositions: Array<string>;
}


export const shipsAtom = atom<Array<TShipData>>([]);

/*
export const setHitPositionAtom = atom(null, (get, set, hitPosition: string) => {
    const ships = get(shipsAtom);
    const ship = ships.find(ship => ship.positionsWithKeys.includes(hitPosition));
    if (ship) {
        ship.hitPositions.push(hitPosition);
        set(shipsAtom, ships);
    }
});
*/