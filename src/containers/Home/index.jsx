import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

import Button from '../../components/Button';
import Modal from '../../components/Modal';
import Slider from '../../components/slider';
// import api from '../../services/api'
import { getImages } from '../../utils/getImages'
import { Background, Container, ContainerButtons, Info, Poster } from './styles'
import { getMovie, getPessoasPopulares, getSeriesPopulares, getTopMovies, getTopSeries } from '../../services/getData';


function Home() {
    const [showModal, setShowModal] = useState(false)
    const [movie, setMovie] = useState()
    const [topMovies, setTopMovies] = useState()
    const [topSeries, setTopSeries] = useState()
    const [seriesPopulares, setSeriesPopulares] = useState()
    const [pessoasPopulares, setPessoasPopulares] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        async function getAllData() {
            Promise.all([
                getMovie(),
                getTopMovies(),
                getTopSeries(),
                getSeriesPopulares(),
                getPessoasPopulares()
            ])
                .then(([movie, topMovies, topSeries, seriesPopulares, pessoasPopulares]) => {
                    setMovie(movie)
                    setTopMovies(topMovies)
                    setTopSeries(topSeries)
                    setSeriesPopulares(seriesPopulares)
                    setPessoasPopulares(pessoasPopulares)
                })
                .catch((error) => console.error(error))
        }

        getAllData()
    }, [])

    return (
        <>
            {movie && (
                <Background img={getImages(movie.backdrop_path)}>
                    {showModal && (
                        <Modal movieId={movie.id} setShowModal={setShowModal} />
                    )}
                    <Container>
                        <Info>
                            <h1>{movie.title}</h1>
                            <p> {movie.overview}</p>

                            <ContainerButtons>
                                <Button red={true} onClick={() => navigate(`/detalhe/${movie.id}`)} >Assista Agora</Button>
                                <Button onClick={() => setShowModal(true)} red={false}>
                                    Assista o Trailer
                                </Button>
                            </ContainerButtons>
                        </Info>

                        <Poster>
                            <img
                                alt="capa-do-filme"
                                src={getImages(movie.poster_path)}
                            />
                        </Poster>
                    </Container>
                </Background>
            )}
            {topMovies && <Slider info={topMovies} title={'Top Filmes'} />}
            {topSeries && <Slider info={topSeries} title={'Top Séries'} />}
            {seriesPopulares && <Slider info={seriesPopulares} title={'Séries Populares'} />}
            {pessoasPopulares && <Slider info={pessoasPopulares} title={'Artistas Populares'} />}
        </>
    )
}

export default Home