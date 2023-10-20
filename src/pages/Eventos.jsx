import { ImgItem, Item, ItemDescricao, Secao, Subtitulo, } from "./styles"
import fotoCardSom from "../images/som,.webp"
import { Slide } from "../components/slider"
import { NavRodape } from "../components/NavRodape"
import { Whats } from "../components/BotaoWhatsapp"

export const Eventos = () => {
    return (
        <>
            <Secao>Eventos</Secao>
            <Item>
                <Slide />
                <ItemDescricao>
                    <Subtitulo>Evento1</Subtitulo>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga enim quaerat ex expedita possimus cupiditate illum rem, blanditiis aperiam non beatae? Voluptatibus non magnam cum. Placeat voluptatibus rem laborum laudantium.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga enim quaerat ex expedita possimus cupiditate illum rem, blanditiis aperiam non beatae? Voluptatibus non magnam cum. Placeat voluptatibus rem laborum laudantium.</p>
                </ItemDescricao>
            </Item>
            <Item>
                <ItemDescricao>
                    <Subtitulo>Evento2</Subtitulo>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga enim quaerat ex expedita possimus cupiditate illum rem, blanditiis aperiam non beatae? Voluptatibus non magnam cum. Placeat voluptatibus rem laborum laudantium.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga enim quaerat ex expedita possimus cupiditate illum rem, blanditiis aperiam non beatae? Voluptatibus non magnam cum. Placeat voluptatibus rem laborum laudantium.</p>
                </ItemDescricao>
                <Slide />
            </Item>
            <Item>
                <Slide />
                <ItemDescricao>
                    <Subtitulo>Evento3</Subtitulo>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga enim quaerat ex expedita possimus cupiditate illum rem, blanditiis aperiam non beatae? Voluptatibus non magnam cum. Placeat voluptatibus rem laborum laudantium.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga enim quaerat ex expedita possimus cupiditate illum rem, blanditiis aperiam non beatae? Voluptatibus non magnam cum. Placeat voluptatibus rem laborum laudantium.</p>
                </ItemDescricao>
            </Item>
            <Item>
                <ItemDescricao>
                    <Subtitulo>Evento4</Subtitulo>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga enim quaerat ex expedita possimus cupiditate illum rem, blanditiis aperiam non beatae? Voluptatibus non magnam cum. Placeat voluptatibus rem laborum laudantium.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga enim quaerat ex expedita possimus cupiditate illum rem, blanditiis aperiam non beatae? Voluptatibus non magnam cum. Placeat voluptatibus rem laborum laudantium.</p>
                </ItemDescricao>
                <Slide />
           </Item>
            <Item>
                <Slide />
                <ItemDescricao>
                    <Subtitulo>Evento5</Subtitulo>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga enim quaerat ex expedita possimus cupiditate illum rem, blanditiis aperiam non beatae? Voluptatibus non magnam cum. Placeat voluptatibus rem laborum laudantium.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga enim quaerat ex expedita possimus cupiditate illum rem, blanditiis aperiam non beatae? Voluptatibus non magnam cum. Placeat voluptatibus rem laborum laudantium.</p>
                </ItemDescricao>
            </Item>
            <Whats/>
            <NavRodape/>

        </>
    )
}