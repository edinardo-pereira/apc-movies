import { ButtonWhite, ButtoRed } from "./styles"

function Button({ children, red }) {
    return (

        <>
            {red ? (
                <ButtoRed> {children}</ButtoRed>
            ) : (
                <ButtonWhite> {children}</ButtonWhite>
            )}


        </>
    )
}

export default Button