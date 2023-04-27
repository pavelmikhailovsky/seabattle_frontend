import {ReactNode} from "react";

export type MyCoordinateType = {
    content: string;
    shipId: string;
    isEnemyHit: boolean;
};

export type EnemyCoordinateType = {
    content: string;
    isHit: boolean;
    isChosen: boolean;
};

export type MyBoardType = {
};

export type EnemyBoardType = {
};

export type DeckShipType = {
    id: string;
    coordinates: Array<CoordinateType>;
    damageCoordinates: Array<CoordinateType>;
    isSank: boolean;
};

export type CoordinateType = {
    id: string;
    content: string;
};

export type GameInfoType = {
    currentTurn: string
};
