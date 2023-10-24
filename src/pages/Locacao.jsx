import { ImgItem, Item, ItemDescricao, Subtitulo, Secao} from "./styles"
import fotoCardSom from "../images/som,.webp"
import { NavRodape } from "../components/NavRodape"
import { Whats } from "../components/BotaoWhatsapp"

export const Locacao = () =>{
    return(
        <>
          <Secao>Locação</Secao>
          <Item>
            <ImgItem src={fotoCardSom} alt="" />
            <Subtitulo>Sonorização</Subtitulo>
            <ItemDescricao>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga enim quaerat ex expedita possimus cupiditate illum rem, blanditiis aperiam non beatae? Voluptatibus non magnam cum. Placeat voluptatibus rem laborum laudantium.
            </ItemDescricao>
          </Item>
          <Item>
            <ImgItem src={fotoCardSom} alt="" />
            <Subtitulo>Sonorização</Subtitulo>
            <ItemDescricao>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga enim quaerat ex expedita possimus cupiditate illum rem, blanditiis aperiam non beatae? Voluptatibus non magnam cum. Placeat voluptatibus rem laborum laudantium.</p>
            </ItemDescricao>
          </Item>
          <Item>
            <ImgItem src={fotoCardSom} alt="" />
            <Subtitulo>Sonorização</Subtitulo>
            <ItemDescricao>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga enim quaerat ex expedita possimus cupiditate illum rem, blanditiis aperiam non beatae? Voluptatibus non magnam cum. Placeat voluptatibus rem laborum laudantium.</p>
            </ItemDescricao>
          </Item>
          <Item>
            <ImgItem src={fotoCardSom} alt="" />
            <Subtitulo>Sonorização</Subtitulo>
            <ItemDescricao>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga enim quaerat ex expedita possimus cupiditate illum rem, blanditiis aperiam non beatae? Voluptatibus non magnam cum. Placeat voluptatibus rem laborum laudantium.</p>
            </ItemDescricao>
          </Item>
          <Item>
            <ImgItem src={fotoCardSom} alt="" />
            <Subtitulo>Sonorização</Subtitulo>
            <ItemDescricao>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga enim quaerat ex expedita possimus cupiditate illum rem, blanditiis aperiam non beatae? Voluptatibus non magnam cum. Placeat voluptatibus rem laborum laudantium.</p>
            </ItemDescricao>
          </Item>
          <Item>
            <ImgItem src={fotoCardSom} alt="" />
            <Subtitulo>Sonorização</Subtitulo>
            <ItemDescricao>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga enim quaerat ex expedita possimus cupiditate illum rem, blanditiis aperiam non beatae? Voluptatibus non magnam cum. Placeat voluptatibus rem laborum laudantium.</p>
            </ItemDescricao>
          </Item>
          <Whats/>
          <NavRodape/>
        </>
    )
}