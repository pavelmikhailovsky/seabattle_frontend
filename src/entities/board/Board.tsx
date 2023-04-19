import Coordinate from "../coordinate/Coordinate";
import { getOwnCoordinates } from "shared/api/api";
import { BoardInfo, CoordinateInfo } from "shared/types";
import "./Board.css";

export default function Board(props: BoardInfo) {

    const getArray = (start: number, stop: number, step: number) =>
        Array.from({length: (stop - start) / step + 1}, (v, i) => start + i * step);

    let coordinates: Array<CoordinateInfo> = getOwnCoordinates();
    let letters: Array<number> = getArray(65, 74, 1);

    return (
        <div id="wrapper">
            <div id="left">
                <h2 id="username-place">User</h2>
                <table id="playerField">
                    <tr>
                        <th></th>
                        {getArray(1, 10, 1).map(n => <th>{n}</th>)}
                    </tr>

                    {letters.map(
                        letter =>
                            <tr>
                                <th>{String.fromCharCode(letter)}</th>
                                {coordinates.filter(c => c.content.charCodeAt(0) === letter)
                                    .map(x => <Coordinate content={x.content} shipId={x.shipId} />)}
                            </tr>
                    )}

                </table>
            </div>
            <div id="center">
                <p id="current-turn">Ваш ход!</p>
                <p id="general-status"></p>
            </div>
            <div id="right">
                <h2>Enemy</h2>
                <table id="playerEnemyField">
                    <tr>
                        <th></th>
                        {getArray(1, 10, 1).map(n => <th>{n}</th>)}
                    </tr>

                    {letters.map(
                        (letter, index) =>
                            <tr>
                                <th>{index + 1}</th>
                                {coordinates.filter(c => c.content.charCodeAt(0) === letter)
                                    .map((x) => <td> <a className={x.content}></a> </td>)}
                            </tr>
                    )}

                </table>
            </div>
        </div>
    );
}











