import { useEffect, useState } from "react"

import { Background, Container } from "./styles"
import {  getMovieVideo } from "../../services/getData"

function Modal({ movieId, setShowModal }) {
    const [movie, setMovie] = useState()

    useEffect(() => {
        async function getMovies() {
            setMovie(await getMovieVideo(movieId))
        }

        getMovies()
    }, [])

    return (
        <Background onClick={() => setShowModal(false)} >
            {movie && (
                <Container>
                    
                    <iframe
                        src={`https://www.youtube.com/embed/${movie.key}`}
                        title="Youtube Video Play"
                        height="500px"
                        width="100%"
                        ></iframe>
                </Container>
            )}
        </Background>
    )
}

export default Modal