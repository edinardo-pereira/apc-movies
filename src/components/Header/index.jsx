
import { Link } from 'react-router-dom'
import { Container, Menu, Li } from './styles'




function Header() {
    return (
        <Container>
            <Menu>
                <Li>
                    <Link to="/" >Home</Link>
                </Li>
                <Li>
                    <Link to="/filmes"  >Filmes</Link>
                </Li>
                <Li>
                    <Link to="/series"  >Séries</Link>
                </Li>
            </Menu>
        </Container>
    )
}

export default Header
