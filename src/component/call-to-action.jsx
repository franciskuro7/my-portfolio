

const Button = ({ onclick, variale, title }) => {

    return (
        <ButtonWrapper
            onClick={onclick}
            variale={backgroundColor}>
            {title}
        </ButtonWrapper>
    )
}

export default Button;