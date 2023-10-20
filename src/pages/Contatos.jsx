import { Whats } from "../components/BotaoWhatsapp"
import { Mapa } from "../components/Mapa"
import { NavRodape } from "../components/NavRodape"
import { ContatosMapa, Email, FaleConosco, Secao, Subtitulo, Telefone, Titulo, WhatsAppContatos } from "./styles"
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
                        <img src={telefone}/>
                        <p> (85) 9999-9999</p>
                    </Telefone>
                    <whatsapp>
                    <img src={whatsapp} width="10%" />
                    <Link to="https://wa.link/y270z1">abrir whatsapp</Link>
                    </whatsapp>
                    <Email>
                        <img src={email} />
                        <p> citiloc@email.com.br</p>
                    </Email>
                    <Telefone>
                        <img src={instagram} />
                        <Link to="https://www.instagram.com/citiloc"> @CitiLoc</Link>
                    </Telefone>
                </FaleConosco>
                <Mapa />
            </ContatosMapa>
            <Whats />
            <NavRodape />
        </>
    )
}