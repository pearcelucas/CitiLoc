import { ImgItem, Item, ItemDescricao, Subtitulo, Secao, TextoDescricao, SlideFoto } from "./styles"
import fotoCardSom from "../images/som,.webp"
import fotoportico from "../images/Portico.jpeg"
import { NavRodape } from "../components/NavRodape"
import { Whats } from "../components/BotaoWhatsapp"
import { Slide } from "../components/slider"
import Slider from "react-slick"
import { SliderSom } from "../components/SliderSom"
import { SliderEstrutura } from "../components/SliderEstrutura"
import { SliderImagem } from "../components/SliderImagem"
import { SliderNotebooks } from "../components/SliderNotebook"
import { SliderDisciplinadores } from "../components/SliderDisciplinadores"

export const Locacao = () => {
  return (
    <>
      <Secao>Locação</Secao>
      <Item>
        <SlideFoto>
          <SliderSom />
          {/* <ImgItem src={fotoCardSom} alt="" /> */}
        </SlideFoto>
        <ItemDescricao>
          <Subtitulo>Sonorização</Subtitulo>
          <TextoDescricao>A Citiloc é especializada em sonorização para eventos sociais, shows, convenções, eventos corporativos.</TextoDescricao>
          <TextoDescricao>Todos os nossos caixas de som para locação são testados, instalados e retirados por profissionais altamente qualificados.</TextoDescricao>
          <TextoDescricao>Possuimos caixas amplificadoras, mesas de controle, microfones, retornos e muitos outros equipamentos fazem parte da lista que é essencial para que seu evento possua o máximo de qualidade de som.</TextoDescricao>
        </ItemDescricao>
      </Item>
      <Item>
        <SlideFoto>
          <SliderEstrutura />
          {/* <ImgItem src={fotoCardSom} alt="" /> */}
        </SlideFoto>
        {/* <ImgItem src={fotoportico} alt="" /> */}
        <ItemDescricao>
          <Subtitulo>Estruturas</Subtitulo>
          <TextoDescricao>Aluguel e montagem de estruturas metalicas de alumino para diversos formatos de projetos, portico, palcos, banners, backdrops, stands e para Fixação de Iluminação e paineis de LED.</TextoDescricao>
          <TextoDescricao>Contamos com uma diversidade de estruturas na linha Q15, Box Q20, Q25, Q30 e Q50 para grandes projetos e montagens de Shows.</TextoDescricao>
          <TextoDescricao>Palcos, pisos, coberturas e praticáveis com tamanhos variados de acordo com a sua necessidade excelente acabamento!
          </TextoDescricao>
        </ItemDescricao>
      </Item>
      <Item>
        <SlideFoto>
          <SliderImagem />
                 </SlideFoto>
        <ItemDescricao>
          <Subtitulo>Imagem</Subtitulo>
          <TextoDescricao>A Citiloc é especializada em sonorização para eventos sociais, shows, convenções, eventos corporativos.</TextoDescricao>
          <TextoDescricao>Todos os nossos caixas de som para locação são testados, instalados e retirados por profissionais altamente qualificados.</TextoDescricao>
          <TextoDescricao>Possuimos caixas amplificadoras, mesas de controle, microfones, retornos e muitos outros equipamentos fazem parte da lista que é essencial para que seu evento possua o máximo de qualidade de som.</TextoDescricao>
        </ItemDescricao>
      </Item>
      <Item>
        <SlideFoto>
          <SliderNotebooks />
        </SlideFoto>
        <ItemDescricao>
          <Subtitulo>NOTEBOOKS</Subtitulo>
          <TextoDescricao>A Citiloc é especializada em sonorização para eventos sociais, shows, convenções, eventos corporativos.</TextoDescricao>
          <TextoDescricao>Todos os nossos caixas de som para locação são testados, instalados e retirados por profissionais altamente qualificados.</TextoDescricao>
          <TextoDescricao>Possuimos caixas amplificadoras, mesas de controle, microfones, retornos e muitos outros equipamentos fazem parte da lista que é essencial para que seu evento possua o máximo de qualidade de som.</TextoDescricao>
        </ItemDescricao>
      </Item>
      <Item>
        <SlideFoto>
          <SliderDisciplinadores />
          {/* <ImgItem src={fotoCardSom} alt="" /> */}
        </SlideFoto>
        <ItemDescricao>
          <Subtitulo>Unifilas, disciplinadores e grades</Subtitulo>
          <TextoDescricao>A Citiloc é especializada em sonorização para eventos sociais, shows, convenções, eventos corporativos.</TextoDescricao>
          <TextoDescricao>Todos os nossos caixas de som para locação são testados, instalados e retirados por profissionais altamente qualificados.</TextoDescricao>
          <TextoDescricao>Possuimos caixas amplificadoras, mesas de controle, microfones, retornos e muitos outros equipamentos fazem parte da lista que é essencial para que seu evento possua o máximo de qualidade de som.</TextoDescricao>
        </ItemDescricao>
      </Item>
      <Item>
        <SlideFoto>
          <SliderEstrutura />
          {/* <ImgItem src={fotoCardSom} alt="" /> */}
        </SlideFoto>
        <ItemDescricao>
          <Subtitulo>Outros</Subtitulo>
          <TextoDescricao>A Citiloc é especializada em sonorização para eventos sociais, shows, convenções, eventos corporativos.</TextoDescricao>
          <TextoDescricao>Todos os nossos caixas de som para locação são testados, instalados e retirados por profissionais altamente qualificados.</TextoDescricao>
          <TextoDescricao>Possuimos caixas amplificadoras, mesas de controle, microfones, retornos e muitos outros equipamentos fazem parte da lista que é essencial para que seu evento possua o máximo de qualidade de som.</TextoDescricao>
        </ItemDescricao>
      </Item>
      <Whats />
      <NavRodape />
    </>
  )
}