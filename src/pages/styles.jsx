import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { SwiperSlide } from "swiper/react";

export const Container = styled.div`
    background-color: white;
    
`

export const Titulo = styled.h1`
color: #004bae;
background-color: #dfe2f5;
padding: 2%;
font-size: 3vw;

`

export const Subtitulo = styled.h2`
    font-size: 1.5vw;
    background-color: #dfe2f5;


`

export const Navegacao = styled.nav`
    width: 100%;
    background-color: black;
   
    display: flex;
    justify-content: space-around
    
`

export const Lista = styled.ul`
    display: flex;
    align-items: end;
    padding-bottom: 1vw;
    gap: 30px;
    list-style: none;
    
`

export const ItemLista = styled(Link)`
    text-decoration: none;
    color: white;
    font-size: 2vw;
    &:hover{
        color: #004bae;
    }
    
`

export const SwipeSlide = styled(SwiperSlide)`

    
`

export const ImagemSlider = styled.img`
    width: 100%;
    max-height: 500px;
  
`

export const Cards = styled.div`
display: flex;
margin: 0 auto;
max-width: 80%;
gap: 5%;
justify-content: center;
margin-top: 5%;
`

export const Card = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 5%;
    background-color: #dfe2f5;
    width: 30%;
    border-radius: 15px;
    padding: 20px;
    box-shadow: 5px 5px 10px rgba(0,0,0,0.3);
`

export const TituloCard = styled.h2`
    color: #004bae;
    font-size: 24px;
    margin: 20px 0;
`

export const ImagemCard = styled.img`
    max-width: 100%;
    border-radius: 15px;
`

export const DescricaoCard = styled.p`
    font-size: 16px;
    line-height: 1.3;
    text-align: center;
    color: #004bae;
`

export const DivBotao = styled.div`
display: flex;
justify-content: center;
align-items: center;
    
`

export const Botao = styled(Link)`
margin-top: 2%;
margin-bottom: 2%;
width: 20%;
background-color: #dfe2f5;
border-radius: 15px;
padding: 20px;
text-align: center;
text-decoration: none;
color: #004bae;
box-shadow: 5px 5px 10px rgba(0,0,0,0.3);

`

export const Whatsapp = styled.img`
    width: 100%;
`

export const BotaoWhatsapp = styled(Link)`
width: 5%;
position: fixed;
z-index: 3;
bottom: 5%;
right: 1%;
`

export const Rodape = styled.footer`
    width: 100%;
    background-color: black;
    display: flex;
    color: white;
    padding-bottom: 1%;
    
    
`

export const Sobre = styled.div`
    padding-left: 5%;
    padding-right: 2.5%;
    width: 40%;
    text-align: justify;
    
`

export const Divisoria = styled.hr`
    width: 100%;
    margin-top: 3%;
    margin-bottom: 3%;
`

export const Lista2 = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 1%;
    list-style: none;
    color: white;
    height: 70%;
    justify-content: space-evenly;
    
`

export const MenuRapido = styled.div`

width: 30%;
padding-left: 2.5%;
padding-right: 2.5%;
padding-top: 2.5%;

`

export const TituloRodape = styled.h2`
    color: white;
    font-size: 1.5vw;
    margin-top: 10%;
    margin-bottom: 10%;
    font-weight: bolder;
    
    margin-top: 0;
    margin-bottom: 0;
`


export const ItemLista2 = styled(Link)`
    text-decoration: none;
    color: white;
    font-size: 1vw;
    &:hover{
        color: #004bae;
    }
    
`

export const ContatosEndereco = styled.div`

width: 30%;
padding-left: 2.5%;
padding-right: 5%;
padding-top: 2.5%;
`

export const Endereco = styled.div`
display: flex;
margin-top: 10%;
    
`
export const Telefone = styled.div`
display: flex;
margin-top: 10%;
    
`
export const Email = styled.div`
display: flex;
margin-top: 10%;
    
`

export const Secao = styled.h2`
color: black;
background-color: #dfe2f5;
padding: 2%;
font-size: 3vw;
margin-left: 10%;
margin-right: 10%;

`

export const Item = styled.div`
display: flex;
justify-content: center;
margin: 5% 10%;
border: 1px solid black;
    
`

export const ItemDescricao = styled.div`
background-color: #dfe2f5;
width: 60%;
padding-left: 5%;
padding-top: 5%;
    
`

export const ImgItem = styled.img`
    width: 30%;
    padding-right: 5%;
    padding-left: 5%;
    
`

export const FaleConosco = styled.div`
    background-color: #dfe2f5;
    width: 40%;

`

export const ContatosMapa = styled.div`
    display: flex;
    margin-left: 10%;
    margin-right: 10%;

`

