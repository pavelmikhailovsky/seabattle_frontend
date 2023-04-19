import {Coordinate, CoordinateInfo, DeckShip} from "../types";

export function getOwnCoordinates(): Array<CoordinateInfo> {
    let gameField: Array<CoordinateInfo> = initialGameField();
    let deckShips: Array<DeckShip> = [
        {
            id: "asdawas",
            coordinates: [{id: "asda", content: "A1"}, {id: "asda", content: "A3"}],
            damageCoordinates: [{id: "asda", content: "A2"}],
            isSank: false
        }
    ]

    return changeGameField(deckShips, gameField);
}

export function initialGameField(): Array<CoordinateInfo> {
    let coordinates: Array<CoordinateInfo> = [];

    let number: number = 1;
    let letter: number = 65;
    let count: number = 1;
    while(count <= 100) {
        if(number > 10) {
            number = 1;
            letter += 1;
        }

        coordinates.push({content: String.fromCharCode(letter).concat(number.toString()), shipId: ""});

        number++;
        count++;
    }

    return coordinates;
}

function changeGameField(deckShips: Array<DeckShip>, gameField: Array<CoordinateInfo>): Array<CoordinateInfo> {
    let changedGameField: Array<CoordinateInfo> = Array.from(gameField);

    if (deckShips.length === 0) {
        return changedGameField;
    }

    for (let deckShip of deckShips) {
        if (!deckShip.isSank) {
            let coordinates: Array<Coordinate> = deckShip.coordinates;

            for (let coordinate of coordinates) {
                let coordinateGameField: CoordinateInfo | undefined = changedGameField.find((v) => v.content === coordinate.content);

                if (coordinateGameField) {
                    coordinateGameField.shipId = deckShip.id;
                }
            }
        }

        if (deckShip.damageCoordinates.length > 0) {
            let damageCoordinates: Array<Coordinate> = deckShip.damageCoordinates;

            for (let coordinate of damageCoordinates) {
                let coordinateGameField: CoordinateInfo | undefined = changedGameField.find((v) => v.content === coordinate.content);

                if (coordinateGameField) {

                }
            }
        }

    }

    return changedGameField;
}
