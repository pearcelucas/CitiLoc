import { DivSlide, ImgEventos, ImgItem, Item, ItemDescricao, Secao, Subtitulo, } from "./styles"
import { Slide } from "../components/slider"
import { NavRodape } from "../components/NavRodape"
import { Whats } from "../components/BotaoWhatsapp"
import evento1 from "../images/Castelao.jpeg"
import evento2 from "../images/Palco.jpeg"
import evento3 from "../images/Tenda.jpeg"

<images />

export const Eventos = () => {
    return (
        <>
            <Secao>Eventos</Secao>
            <Item>
                <DivSlide>
                    <Slide />
                </DivSlide>
                <ImgEventos src={evento1} />
                <ItemDescricao>
                    <Subtitulo>Evento 1</Subtitulo>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga enim quaerat ex expedita possimus cupiditate illum rem, blanditiis aperiam non beatae? Voluptatibus non magnam cum. Placeat voluptatibus rem laborum laudantium.</p>
                </ItemDescricao>
            </Item>
            <Item>
                <DivSlide>
                    <Slide />
                </DivSlide>
                <ImgEventos src={evento2} />
                <ItemDescricao>
                    <Subtitulo>Evento 2</Subtitulo>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga enim quaerat ex expedita possimus cupiditate illum rem, blanditiis aperiam non beatae? Voluptatibus non magnam cum. Placeat voluptatibus rem laborum laudantium.</p>
                </ItemDescricao>
            </Item>
            <Item>
                <DivSlide>
                    <Slide />
                </DivSlide>
                <ImgEventos src={evento3} />
                <ItemDescricao>
                    <Subtitulo>Evento 3</Subtitulo>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga enim quaerat ex expedita possimus cupiditate illum rem, blanditiis aperiam non beatae? Voluptatibus non magnam cum. Placeat voluptatibus rem laborum laudantium.</p>
                </ItemDescricao>
            </Item>
            <Item>
                <DivSlide>
                    <Slide />
                </DivSlide>
                <ImgEventos src={evento1} />
                <ItemDescricao>
                    <Subtitulo>Evento 4</Subtitulo>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga enim quaerat ex expedita possimus cupiditate illum rem, blanditiis aperiam non beatae? Voluptatibus non magnam cum. Placeat voluptatibus rem laborum laudantium.</p>
                </ItemDescricao>
            </Item>
            <Item>
                <DivSlide>
                    <Slide />
                </DivSlide>
                <ImgEventos src={evento1} />
                <ItemDescricao>
                    <Subtitulo>Evento 5</Subtitulo>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga enim quaerat ex expedita possimus cupiditate illum rem, blanditiis aperiam non beatae? Voluptatibus non magnam cum. Placeat voluptatibus rem laborum laudantium.</p>
                </ItemDescricao>
            </Item>
            <Item>
                <DivSlide>
                    <Slide />
                </DivSlide>
                <ImgEventos src={evento1} />
                <ItemDescricao>
                    <Subtitulo>Evento 6</Subtitulo>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga enim quaerat ex expedita possimus cupiditate illum rem, blanditiis aperiam non beatae? Voluptatibus non magnam cum. Placeat voluptatibus rem laborum laudantium.</p>
                </ItemDescricao>
            </Item>

            <Whats />
            <NavRodape />

        </>
    )
}
