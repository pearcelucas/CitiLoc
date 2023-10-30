import { DivSlide, ImgEventos, Item, ItemDescricao, Secao, Subtitulo, } from "./styles"
import { Slide } from "../components/slider"
import { NavRodape } from "../components/NavRodape"
import { Whats } from "../components/BotaoWhatsapp"
import evento1 from "../images/Castelao.jpeg"
import evento2 from "../images/Palco.jpeg"
import evento3 from "../images/Tenda.jpeg"
import { SliderCastelao } from "../components/SliderCastelao"
import { SliderUece } from "../components/Slider UECE"

<images />

export const Eventos = () => {
    return (
        <>
            <Secao>Eventos</Secao>
            <Item>
                <DivSlide>
                    <SliderCastelao/>
                </DivSlide>
                <ImgEventos src={evento1} />
                <ItemDescricao>
                    <Subtitulo>Jogos dos times cearenses</Subtitulo>
                    <p>Atendemos aos jogos dos times cearenses na Arena Castelão e no estaio Presidente Vargas.</p>
                </ItemDescricao>
            </Item>
            <Item>
                <DivSlide>
                    <SliderUece/>
                </DivSlide>
                <ImgEventos src={evento2} />
                <ItemDescricao>
                    <Subtitulo>Encontros Universitário UECE</Subtitulo>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga enim quaerat ex expedita possimus cupiditate illum rem, blanditiis aperiam non beatae? Voluptatibus non magnam cum. Placeat voluptatibus rem laborum laudantium.</p>
                </ItemDescricao>
            </Item>
            <Whats />
            <NavRodape />

        </>
    )
}
