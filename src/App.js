import styles from './App.module.css';
import Square from "./components/Square";
import Button from "./components/Button";
import {useState} from "react";

function App() {
    const [squareColor, setSquareColor] = useState(styles.white);

    function onButtonClickHandler(colorClass) {
        setSquareColor(colorClass);
    }

    return (
        <div>
            <main>
                <Square id='square' className={squareColor}/>
                <div className={styles.buttonBox}>
                    <Button id='button__red' className={styles.red} onClick={() => onButtonClickHandler(styles.red)}>Red</Button>
                    <Button id='button__green' className={styles.green} onClick={() => onButtonClickHandler(styles.green)}>Green</Button>
                    <Button id='button__blue' className={styles.blue} onClick={() => onButtonClickHandler(styles.blue)}>Blue</Button>
                </div>
            </main>
        </div>
    );
}

export default App;
