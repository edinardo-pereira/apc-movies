import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'

import { 
    getMovieById, 
    getMovieCredits, 
    getMovieSimilar, 
    getMovieVideo 
} from '../../services/getData'
import { Container } from './styles'


function Detail() {
    const {id} = useParams()    
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
            .then(([ movie, videos, credits, similar ]) =>{
                console.log({movie, videos, credits, similar});
                
                setMovie(movie)
                setMovieVideo(videos)
                setMovieCredits(credits)
                setMovieSimilar(similar)
            })
            .catch((error) => console.error(error))
        }

        getAllData()
    },[])

    return (
        <Container >
            <div>Detalhes</div>
        </Container>
    )
}

export default Detail




// import { useEffect, useState } from 'react'



// import { Background, Container, Cover } from './styles'
// import { getMovieById, getMovieCredits, getMovieSimilar, getMovieVideo } from '../../services/getData'
// import { useParams } from 'react-router-dom'
// import { getImages } from '../../utils/getImages'

// function Detail() {
//     const { id } = useParams()
//     const [movie, setMovie] = useState()
//     const [movieVideos, setMovieVideos] = useState()
//     const [movieCredits, setMovieCredits] = useState()
//     const [movieSimilar, setMovieSimilar] = useState()


//     useEffect(() => {
//         async function getAllData() {
//             Promise.all([
//                 getMovieById(id),
//                 getMovieVideo(id),
//                 getMovieCredits(id),
//                 getMovieSimilar(id),

//             ])
//                 .then(([movie, videos, credits, similar]) => {
//                     console.log({ movie, videos, credits, similar });

//                     setMovie(movie)
//                     setMovieVideos(videos)
//                     setMovieCredits(credits)
//                     setMovieSimilar(similar)
//                 })
//                 .catch((error) => console.error(error))
//         }

//         getAllData()
//     }, [])


//     return (
//         <>
//             {movie && (
//                 <>
//                     <Background image={getImages(movie.backdrop_path)} />
//                     <Container>
//                         <Cover>
//                             <img src={getImages(movie.poster_path)} alt="" />
//                         </Cover>
//                         <div>Detalhe</div>
//                     </Container>
//                 </>
//             )
//             }
//         </>
//     )

//     export default Detail