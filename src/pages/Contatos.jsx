import { Whats } from "../components/BotaoWhatsapp"
import { Mapa } from "../components/Mapa"
import { NavRodape } from "../components/NavRodape"
import { ContatosMapa, Email, FaleConosco, ImgContatos, LinkContatos, Secao, Subtitulo, Telefone, TextoContatos, Titulo, WhatsAppContatos } from "./styles"
import telefone from "../images/telefoneAzul.png"
import email from "../images/gmail.png"
import instagram from "../images/instagram.png"
import { Link } from "react-router-dom"
import whatsapp from "../images/whatsapp.png"
export const Contatos = () => {
    return (
        <>
            <Secao>Contatos</Secao>
            <ContatosMapa>
                <FaleConosco>
                    <Subtitulo>Fale conosco:</Subtitulo>
                    <Telefone>
                        <ImgContatos src={telefone} />
                        <TextoContatos> (85) 9999-9999</TextoContatos>
                        <Link to="https://wa.link/y270z1">Abrir whatsapp</Link>
                    </Telefone>
                    <Email>
                        <ImgContatos src={email} />
                        <TextoContatos> citiloc@email.com.br</TextoContatos>
                    </Email>
                    <Telefone>
                        <ImgContatos src={instagram} />
                        <LinkContatos to="https://www.instagram.com/citiloc"> @CitiLoc</LinkContatos>
                    </Telefone>
                </FaleConosco>
                <Mapa />
            </ContatosMapa>
            <Whats />
            <NavRodape />
        </>
    )
}