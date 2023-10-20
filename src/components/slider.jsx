import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import imagem1 from "../images/182178541804722.jpg";
import imagem2 from "../images/aluguel-projetor-datashow-sp-para-eventos-visual-imagem.jpg";
import imagem3 from "../images/estrutura-tubular-11.jpeg";
import imagem5 from "../images/images (1).jpeg";
import imagem6 from "../images/images.jpeg";
import imagem7 from "../images/images (2).jpeg";
import { ImagemSlider } from "../pages/styles";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';




export const Slide = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={0}
      slidesPerView={3}
      autoplay={{ delay: 1500 }}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <ImagemSlider src={imagem1} alt="Imagem 1" />
      </SwiperSlide>
      <SwiperSlide>
        <ImagemSlider src={imagem2} alt="Imagem 2" />
      </SwiperSlide>
      <SwiperSlide>
        <ImagemSlider src={imagem3} alt="Imagem 3" />
      </SwiperSlide>
      <SwiperSlide>
        <ImagemSlider src={imagem5} alt="Imagem 5" />
      </SwiperSlide>
      <SwiperSlide>
        <ImagemSlider src={imagem6} alt="Imagem 6" />
      </SwiperSlide>
      <SwiperSlide>
        <ImagemSlider src={imagem7} alt="Imagem 7" />
      </SwiperSlide>
    </Swiper>
  )
}


