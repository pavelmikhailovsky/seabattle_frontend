import { CoordinateInfo } from "shared/types";
import "./Coordinate.css";

export default function Coordinate(props: CoordinateInfo) {

    let clazzName: string = !props.shipId ? "coordinate-not-occupied" : "coordinate-occupied";

    if (props.isEnemyHit) {
        clazzName = "coordinate-occupied-enemy-hit"
    }

    return (
        <td className={clazzName}></td>
    );
}