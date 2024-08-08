import { Swiper, SwiperSlide } from 'swiper/react'

import { Container } from "./styles"
import Card from '../card';

function Slider({ info, title }) {

    return (

        <Container>
            <h2>{title}</h2>
            <Swiper
                grabCursor
                spaceBetween={10}
                slidesPreView={'auto'}
                className="swiper"
            >
                {info.map((item, index) => (
                    <SwiperSlide key={index}>
                        <Card item={item} />
                    </SwiperSlide>
                ))}

            </Swiper>
        </Container>
    )
}

export default Slider