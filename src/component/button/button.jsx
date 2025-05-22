import './button.css'

const Button = ({title, onclick}) => {
    return (
        <button 
        type='button'
            className ="primary"
            // className={`${styles[classname]}`}
            onClick={onclick}
        >
            {title}
        </button>

    )
}

export default Button