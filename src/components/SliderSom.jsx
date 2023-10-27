import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import imagem1 from "../images/BackDrop.jpeg";
import imagem2 from "../images/Bar.jpeg";
import imagem3 from "../images/Castelao.jpeg";
import imagem5 from "../images/Estrutura Metalica.jpeg";
import imagem6 from "../images/Palco.jpeg";
import imagem7 from "../images/Portico.jpeg";
import imagem8 from "../images/Tenda.jpeg";
import imagem9 from "../images/Unifila.jpeg";
import { ImagemSlider } from "../pages/styles";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';


    const estiloImagem = {
      width: '100%', // Tamanho desejado em pixels
    //   height: '80%',
    };



export const SliderSom = () => {
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
        <ImagemSlider style={estiloImagem} src={imagem1} alt="Imagem 1" />
      </SwiperSlide>
      <SwiperSlide>
        <ImagemSlider style={estiloImagem} src={imagem2} alt="Imagem 2" />
      </SwiperSlide>
      <SwiperSlide>
        <ImagemSlider style={estiloImagem} src={imagem3} alt="Imagem 3" />
      </SwiperSlide>
      <SwiperSlide>
        <ImagemSlider style={estiloImagem} src={imagem5} alt="Imagem 5" />
      </SwiperSlide>
      <SwiperSlide>
        <ImagemSlider style={estiloImagem} src={imagem6} alt="Imagem 6" />
      </SwiperSlide>
      <SwiperSlide>
        <ImagemSlider style={estiloImagem} src={imagem7} alt="Imagem 7" />
      </SwiperSlide>
      <SwiperSlide>
        <ImagemSlider style={estiloImagem} src={imagem8} alt="Imagem 8" />
      </SwiperSlide>
      <SwiperSlide>
        <ImagemSlider style={estiloImagem} src={imagem9} alt="Imagem 9" />
      </SwiperSlide>
    </Swiper>
  )
}


