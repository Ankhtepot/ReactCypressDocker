import styles from './Square.module.css';

function Square(props) {
    return <div id={props.id} className={`${styles.square} ${props.className}`}/>
}

export default Square;