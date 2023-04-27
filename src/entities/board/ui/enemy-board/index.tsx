import {getEnemyCoordinates} from "shared/api/api";
import {EnemyBoardType, EnemyCoordinateType} from "shared/types";
import "./Board.css";
import {createArrayNumbers} from "shared/lib";

export const EnemyBoard = (props: EnemyBoardType) => {

    let coordinates: Array<EnemyCoordinateType> = getEnemyCoordinates();
    let letters: Array<number> = createArrayNumbers(65, 74, 1);

    return (
        <div id="wrapper">
            <div id="right">
                <h2>Enemy</h2>
                <table id="playerEnemyField">
                    <tr>
                        <th></th>
                        {createArrayNumbers(1, 10, 1).map(n => <th>{n}</th>)}
                    </tr>

                    {letters.map(
                        (letter, index) =>
                            <tr>
                                <th>{index + 1}</th>
                                {coordinates.filter(c => c.content.charCodeAt(0) === letter)
                                    .map((x) => <Coordinate content={x.content}
                                                                             isHit={x.isHit}
                                                                             isChosen={x.isChosen} />)}
                            </tr>
                    )}

                </table>
            </div>
        </div>
    );
}

const Coordinate = (props: EnemyCoordinateType) => {

    return (
        <td> <a className={props.content}></a> </td>
    );
}
