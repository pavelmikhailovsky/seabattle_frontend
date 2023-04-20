export type CoordinateInfo = {
    content: string;
    shipId: string;
    isEnemyHit: boolean;
};  

export type BoardInfo = {

}

export type DeckShip = {
    id: string;
    coordinates: Array<Coordinate>;
    damageCoordinates: Array<Coordinate>;
    isSank: boolean;
}

export type Coordinate = {
    id: string;
    content: string;
}


