import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import imagem1 from "../images/notebooks.jpg";
import imagem2 from "../images/Bar.jpeg";
import imagem3 from "../images/Castelao.jpeg";
import imagem5 from "../images/Estrutura Metalica.jpeg";
import imagem6 from "../images/Palco.jpeg";
import imagem7 from "../images/Portico.jpeg";
import imagem8 from "../images/Tenda.jpeg";
import { ImagemSlider } from "../pages/styles";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';





export const SliderNotebooks = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{ delay: 1500 }}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
        
      
    >
      <SwiperSlide>
        <ImagemSlider  src={imagem1} alt="Imagem 1" />
      </SwiperSlide>
      
    </Swiper>
  )
}


