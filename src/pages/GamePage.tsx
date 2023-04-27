import {MyBoard} from "entities/board";
import {EnemyBoard} from "entities/board";

export default function GamePage() {

    return (
        <div>
            <MyBoard />
            <div id="center">
                <p id="current-turn">Player move</p>
                <p id="general-status"></p>
            </div>
            <EnemyBoard />
        </div>
    ); 
}
