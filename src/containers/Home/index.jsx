import { useState, useEffect } from 'react';

import Button from '../../components/Button';
import api from '../../services/api'
import { getImages } from '../../utils/getImages'
import { Backgoud, Container, ContainerButtons, Info, Poster } from './styles'


import Header from '../../components/Header';
import Slider from '../../components/slider';


function Home() {
    const [movie, setMovie] = useState()
    const [topMovies, setTopMovies] = useState()
    const [topSeries, setTopSeries] = useState()
    const [seriesPopulares, setSeriesPopulares ] = useState()
    const [pessoasPopulares, setPessoasPopulares ] = useState()

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
                <Backgoud
                    img={getImages(movie.backdrop_path)}>

                    <Container>
                        <Info>
                            <h1>{movie.title}</h1>
                            <p> {movie.overview}</p>

                            <ContainerButtons>
                                <Button red={true}>Assista Agora</Button>
                                <Button red={false}>Assista o Trailer</Button>
                            </ContainerButtons>
                        </Info>

                        <Poster>
                            <img alt="capa-do-filme" src={getImages(movie.poster_path)} />
                        </Poster>
                    </Container>
                </Backgoud>
            )}
            {topMovies && <Slider info={topMovies} title={'Top Filmes'} />}
            {topSeries && <Slider info={topSeries} title={'Top Séries'} />}
            {seriesPopulares && <Slider info={seriesPopulares} title={'Séries Populares'} />}
            {pessoasPopulares && <Slider info={pessoasPopulares} title={'Artistas Populares'} />}
        </>
    )
}

export default Home