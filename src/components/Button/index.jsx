import { ButtonWhite, ButtoRed } from "./styles"

function Button({ children, red, ...rest }) {
    return (

        <>
            {red ? (
                <ButtoRed {...rest}> {children}</ButtoRed>
            ) : (
                <ButtonWhite {...rest}> {children}</ButtonWhite>
            )}


        </>
    )
}

export default Button