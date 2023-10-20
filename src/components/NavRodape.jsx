import { Link } from "react-router-dom"
import { ContatosEndereco, Divisoria, Email, Endereco, ItemLista2, Lista2, MenuRapido, Rodape, Sobre, Telefone, TituloRodape } from "../pages/styles"
import logo from "../images/Logo.png"
import endereco from "../images/pin-de-localizacao.png"
import telefone from "../images/telefone.png"
import email from "../images/email.png"


export const NavRodape = () => {
    return(
   
        <Rodape>
                <Sobre>
                    <img src={logo} />
                    <p>A CITILOC é uma empresa especializada em LOCAÇÃO e MONTAGEM de estruturas para eventos, sonorização, notebooks, projetores,
                        grades divisórias e painéis de led. Atendendo suas necessidades em eventos como festas, desfiles, feiras, stands para exposições,
                        congressos e muito mais.</p>
                    <Divisoria/>
                    <p>Razão Social: Citiloc lorem ipsum</p>
                    <p>CNPJ: 123.456.0001/01</p>
                </Sobre>
                <MenuRapido>
                    <TituloRodape>Menu Rápido</TituloRodape>
                    <Divisoria/>
                    <Lista2>
                        <li>
                            <ItemLista2 to="/">Home</ItemLista2>
                        </li>

                        <li>
                            <ItemLista2 to="/Locacao">Locação</ItemLista2>
                        </li>

                        <li>
                            <ItemLista2 to="/eventos">Eventos</ItemLista2>
                        </li>
                        <li>
                            <ItemLista2 to="/contatos">Contatos</ItemLista2>
                        </li>

                    </Lista2>
                </MenuRapido>
                <ContatosEndereco>
                    <TituloRodape>Contatos e endereço</TituloRodape>
                    <Divisoria/>
                    <Endereco>
                        <img src={endereco} />
                        <p>Rua Lorem Ipsum, 1234</p>
                    </Endereco>
                    <p>Fortaleza/CE</p>
                    <p>Cep: 60123-456</p>
                    <Link to="https://maps.app.goo.gl/xLcgvBs6z8nvh8y78">Ver no mapa</Link>
                    <Telefone>
                        <img src={telefone} />
                        <p>(85) 9999-9999</p>
                    </Telefone>
                    <Link to="https://wa.link/y270z1">abrir whatsapp</Link>
                    <Email>
                        <img src={email} />
                        <p>citiloc@email.com.br</p>
                    </Email>
                </ContatosEndereco>
            </Rodape>
    )
}