import {getOwnCoordinates} from "shared/api/api";
import {MyBoardType, MyCoordinateType} from "shared/types";
import "./Board.css";
import {createArrayNumbers} from "shared/lib";

export const MyBoard = (props: MyBoardType) => {

    let coordinates: Array<MyCoordinateType> = getOwnCoordinates();
    let letters: Array<number> = createArrayNumbers(65, 74, 1);

    return (
        <div id="wrapper">
            <div id="left">
                <h2 id="username-place">User</h2>
                <table id="playerField">
                    <tr>
                        <th></th>
                        {createArrayNumbers(1, 10, 1).map(n => <th>{n}</th>)}
                    </tr>

                    {letters.map(
                        letter =>
                            <tr>
                                <th>{String.fromCharCode(letter)}</th>
                                {coordinates.filter(c => c.content.charCodeAt(0) === letter)
                                    .map(x => <Coordinate content={x.content}
                                                          shipId={x.shipId}
                                                          isEnemyHit={x.isEnemyHit} />)}
                            </tr>
                    )}

                </table>
            </div>
        </div>
    );
}

const Coordinate = (props: MyCoordinateType) => {

    let clazzName: string = !props.shipId ? "coordinate-not-occupied" : "coordinate-occupied";

    if (props.isEnemyHit) {
        clazzName = "coordinate-occupied-enemy-hit"
    }

    return (
        <td className={clazzName}></td>
    );
}
