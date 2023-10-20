
import { Slide } from "../components/slider"
import { Botao, BotaoWhatsapp, Card, Cards, Container, DescricaoCard, DivBotao, ImagemCard, Titulo, TituloCard,  Whatsapp } from "./styles"
import fotoCard from "../images/locacao-de-box-truss-em-ilha-comprida.jpg"
import fotoCardSom from "../images/som,.webp"
import fotoCard3 from "../images/images (2).jpeg"
import whatsapp from "../images/whatsapp.png"
import { NavRodape } from "../components/NavRodape"
import { Whats } from "../components/BotaoWhatsapp"




export const Home = () => {
    return (
        <Container>
            <Slide />
            <Titulo>As melhores soluções pro seu evento você encontra aqui!!!</Titulo>
            <Cards>
                <Card>
                    <TituloCard>Estruturas para eventos</TituloCard>
                    <ImagemCard src={fotoCard} />
                    <DescricaoCard>Estrturas Q30, palcos, praticáveis, grades etc</DescricaoCard>

                </Card>
                <Card>
                    <TituloCard>Sonorização</TituloCard>
                    <ImagemCard src={fotoCardSom} />
                    <DescricaoCard>Caixas, mesas de som, microfones e demais perifericos </DescricaoCard>

                </Card>
                <Card>
                    <TituloCard>Notebooks e projetores</TituloCard>
                    <ImagemCard src={fotoCard3} />
                    <DescricaoCard>Notebooks, projetores, periféricos etc</DescricaoCard>
                </Card>
            </Cards>
            <DivBotao>
                <Botao to="/Locacao">Veja todas</Botao>
            </DivBotao>
            {/* <BotaoWhatsapp to="https://wa.link/y270z1">
                <Whatsapp src={whatsapp} />
            </BotaoWhatsapp> */}
            <Whats/>
            <NavRodape/>
        </Container>
    )
}