import { CoordinateInfo } from "shared/types";
import "./Coordinate.css";

export default function Coordinate(props: CoordinateInfo) {

    let clazzName = !props.shipId ? "coordinate-not-occupied" : "coordinate-occupied";

    return (
        <td className={clazzName}>

        </td>
    );
}