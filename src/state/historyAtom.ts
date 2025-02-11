import { atom } from "jotai";
import { getBoardCellKey } from "../utils/getBoardCellKey";

export const historyAtom = atom<
    Array<
        ReturnType<typeof getBoardCellKey>>>([]);