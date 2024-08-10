import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Slider  from '../../components/slider'
import Credits from '../../components/Credits'
import SpanGenres from '../../components/SpanGenres'
import {
    getMovieById,
    getMovieCredits,
    getMovieSimilar,
    getMovieVideo
} from '../../services/getData'
import { getImages } from '../../utils/getImages'
import { Container, Background, Cover, Info, ContainerMovies } from './styles'



function Detail() {
    const { id } = useParams()
    const [movie, setMovie] = useState()
    const [movieVideo, setMovieVideo] = useState()
    const [movieCredits, setMovieCredits] = useState()
    const [movieSimilar, setMovieSimilar] = useState()
    

    useEffect(() => {
        async function getAllData() {
            Promise.all([
                getMovieById(id),
                getMovieVideo(id),
                getMovieCredits(id),
                getMovieSimilar(id)
            ])
                .then(([movie, videos, credits, similar]) => {
                    setMovie(movie)
                    setMovieVideo(videos)
                    setMovieCredits(credits)
                    setMovieSimilar(similar)
                })
                .catch((error) => console.error(error))
        }
        getAllData()

    }, [])

    return (
        <>


            {movie && (
                <>
                    <Background image={getImages(movie.backdrop_path)} />
                    <Container >
                        <Cover>
                            <img src={getImages(movie.poster_path)} alt="" />
                        </Cover>
                        <Info>
                            <h2>{movie.title}</h2>
                            <SpanGenres genres={movie.genres} />
                            <p>{movie.overview}</p>
                            <div>
                                <Credits credits={movieCredits} />
                            </div>

                        </Info>

                    </Container>
                    <ContainerMovies>
                        {movieVideo && (
                            <div key={movieVideo.id}>
                                <h4>{movieVideo.name}</h4>
                                <iframe
                                    src={`https://www.youtube.com/embed/${movieVideo.key}`}
                                    title="Youtube Video Play"
                                    height="500px"
                                    width="100%"
                                ></iframe>
                            </div>
                        )}
                    </ContainerMovies>
                    {movieSimilar && <Slider info={movieSimilar} title={'Filmes Similares'} />}
                </>
            )}
        </>
    )
    
}

export default Detail