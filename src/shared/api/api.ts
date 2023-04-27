import {
    CoordinateType,
    MyCoordinateType,
    DeckShipType,
    EnemyCoordinateType
} from "../types";

export function getOwnCoordinates(): Array<MyCoordinateType> {
    let myBoard: Array<MyCoordinateType> = initialBoard(createMyCoordinate);
    let deckShips: Array<DeckShipType> = [
        {
            id: "asdawas",
            coordinates: [{id: "asda", content: "A1"}, {id: "asda", content: "A3"}],
            damageCoordinates: [{id: "asda", content: "A2"}],
            isSank: false
        }
    ]

    return changeMyBoard(deckShips, myBoard);
}

function createMyCoordinate(letter: number, number: number): MyCoordinateType {
    return {
        content: String.fromCharCode(letter).concat(number.toString()),
        shipId: "",
        isEnemyHit: false
    }
}

function createEnemyCoordinate(letter: number, number: number): EnemyCoordinateType {
    return {
        content: String.fromCharCode(letter).concat(number.toString()),
        isHit: false,
        isChosen: false
    }
}

export function getEnemyCoordinates(): Array<EnemyCoordinateType> {
    let enemyBoard: Array<EnemyCoordinateType> = initialBoard(createEnemyCoordinate);
    let enemyCoordinates: Array<EnemyCoordinateType> = [];

    return changeEnemyBoard(enemyBoard, enemyCoordinates);
}

export function initialBoard<T>(func: Function): Array<T> {
    let coordinates: Array<T> = [];

    let number: number = 1;
    let letter: number = 65;
    let count: number = 1;
    while (count <= 100) {
        if (number > 10) {
            number = 1;
            letter += 1;
        }

        let coordinate: T = func(letter, number);
        coordinates.push(coordinate);

        number++;
        count++;
    }

    return coordinates;
}

function changeMyBoard(deckShips: Array<DeckShipType>, myBoard: Array<MyCoordinateType>): Array<MyCoordinateType> {
    let changedMyBoard: Array<MyCoordinateType> = Array.from(myBoard);

    if (deckShips.length === 0) {
        return changedMyBoard;
    }

    for (let deckShip of deckShips) {
        if (!deckShip.isSank) {
            let coordinates: Array<CoordinateType> = deckShip.coordinates;

            for (let coordinate of coordinates) {
                let coordinateMyBoard: MyCoordinateType | undefined = changedMyBoard.find((v) => v.content === coordinate.content);

                if (coordinateMyBoard) {
                    coordinateMyBoard.shipId = deckShip.id;
                } else {
                    console.log(`Coordinate ${coordinate.content} is undefined`);
                }
            }
        }

        if (deckShip.damageCoordinates.length > 0) {
            let damageCoordinates: Array<CoordinateType> = deckShip.damageCoordinates;

            for (let coordinate of damageCoordinates) {
                let coordinateMyBoard: MyCoordinateType | undefined = changedMyBoard.find((v) => v.content === coordinate.content);

                if (coordinateMyBoard) {
                    coordinateMyBoard.isEnemyHit = true;
                } else {
                    console.log(`Coordinate ${coordinate.content} is undefined`);
                }
            }
        }

    }

    return changedMyBoard;
}

function changeEnemyBoard(enemyBoard: Array<EnemyCoordinateType>, enemyCoordinates: Array<EnemyCoordinateType>): Array<EnemyCoordinateType> {
    let changedEnemyBoard: Array<EnemyCoordinateType> = Array.from(enemyBoard);

    if (enemyCoordinates.length === 0) {
        return changedEnemyBoard;
    }

    for (let enemyCoordinate of enemyCoordinates) {
        let coordinate: EnemyCoordinateType | undefined = changedEnemyBoard.find((v) => v.content === enemyCoordinate.content);

        if (coordinate) {
            coordinate.isHit = enemyCoordinate.isHit;
            coordinate.isChosen = enemyCoordinate.isChosen;
        } else {
            console.log(`Coordinate ${enemyCoordinate.content} is undefined`);
        }

    }

    return changedEnemyBoard;
}
