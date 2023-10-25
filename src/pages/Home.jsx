
import { Slide } from "../components/slider"
import { Botao, BotaoWhatsapp, Card, Cards, Container, DescricaoCard, DivBotao, ImagemCard, ParceirosContainer, Titulo, TituloCard, Whatsapp } from "./styles"
import fotoCard from "../images/locacao-de-box-truss-em-ilha-comprida.jpg"
import fotoCardSom from "../images/som,.webp"
import fotoCard3 from "../images/images (2).jpeg"
import { NavRodape } from "../components/NavRodape"
import { Whats } from "../components/BotaoWhatsapp"
import fotoParceiro1 from "../images/Ceará_Sporting_Club_logo.svg.png"
import fotoParceiro2 from "../images/Fortaleza_Esporte_Clube_logo.svg.png"
import fotoParceiro3 from "../images/FERROVIÁRIO ATLÉTICO CLUBE.png"
import fotoParceiro4 from "../images/Brasão_da_UECE.png"



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
            <Titulo>Conheça nossos parceiros:</Titulo>
            <ParceirosContainer>
                <Card>
                    <ImagemCard src={fotoParceiro1} />
                    <DescricaoCard>Ceará Sporting Club</DescricaoCard>
                </Card>
                <Card>
                    <ImagemCard src={fotoParceiro2} />
                    <DescricaoCard>Fortaleza Esporte Clube</DescricaoCard>
                </Card>
                <Card>
                    <ImagemCard src={fotoParceiro3} />
                    <DescricaoCard>Ferroviário Atlético Clube</DescricaoCard>
                </Card>
                <Card>
                    <ImagemCard src={fotoParceiro4} />
                    <DescricaoCard>Universidade Estadual do Ceará</DescricaoCard>
                </Card>
            </ParceirosContainer>
            <Whats />
            <NavRodape />
        </Container>
    )
}