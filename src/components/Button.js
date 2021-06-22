import classes from './Button.module.css';

function Button(props) {
    return (
        <button className={`${classes.button} ${props.className}`}
                onClick={props.onClick}
                id={props.id}
        >
            {props.children}
        </button>
    )
}

export default Button;