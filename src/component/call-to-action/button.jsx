import { ButtonWrapper } from '../../styles/button.jsx'
const Button = ({ title, onclick, link, icons, variant="", ...props }) => {
    return (


        <ButtonWrapper
            type='button'
            className={variant}
            onClick={onclick}
            {...props}
        >
            {title}
            {icons && icons}

        </ButtonWrapper>

    )
}

export default Button