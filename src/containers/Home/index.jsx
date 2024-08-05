import { useState, useEffect } from 'react';

import Button from '../../components/Button';
import Modal from '../../components/Modal';
import Slider from '../../components/slider';
import api from '../../services/api'
import { getImages } from '../../utils/getImages'
import { Background, Container, ContainerButtons, Info, Poster } from './styles'


function Home() {
    const [showModal, setShowModal] = useState(false)
    const [movie, setMovie] = useState()
    const [topMovies, setTopMovies] = useState()
    const [topSeries, setTopSeries] = useState()
    const [seriesPopulares, setSeriesPopulares] = useState()
    const [pessoasPopulares, setPessoasPopulares] = useState()

    useEffect(() => {
        async function getMovies() {
            const {
                data: { results }
            } = await api.get('/movie/popular')

            setMovie(results[0])

        }

        async function getTopMovies() {
            const {
                data: { results }
            } = await api.get('/movie/top_rated')

            console.log(results);
            setTopMovies(results)

        }

        async function getTopSeries() {
            const {
                data: { results }
            } = await api.get('/tv/top_rated')

            console.log(results);
            setTopSeries(results)

        }

        async function getSeriesPopulares() {
            const {
                data: { results }
            } = await api.get('/tv/popular')

            console.log(results);
            setSeriesPopulares(results)

        }

        async function getPessoasPopulares() {
            const {
                data: { results }
            } = await api.get('/person/popular')

            console.log(results);
            setPessoasPopulares(results)

        }

        getMovies()
        getTopMovies()
        getTopSeries()
        getSeriesPopulares()
        getPessoasPopulares()

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
                                <Button red={true}>Assista Agora</Button>
                                <Button onClick={() => setShowModal(true)} red={false}>
                                    Assista o Trailer
                                </Button>
                            </ContainerButtons>
                        </Info>

                        <Poster>
                            <img alt="capa-do-filme" src={getImages(movie.poster_path)} />
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