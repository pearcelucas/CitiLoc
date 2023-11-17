import React, { useState } from 'react';
import styled from 'styled-components';
import ImgCastelão from "../images/estadio-castelao-fortaleza.webp"

const CardWrapper = styled.div`
margin: 10%;
  width: 300px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.5);
  }
`;

const FotoCastelao = styled.img`
  width: 100%;

`

const CardContent = styled.div`
  padding: 20px;
  background-color: #f0f0f0;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Details = styled.div`
  display: none;
`;

const ExpandedCard = styled(CardWrapper)`
  width: 400px;

  ${Details} {
    display: block;
  }
`

const CardEventos2 = () => {
  const [isExpanded, setExpanded] = useState(false);

  const handleCardClick = () => {
    setExpanded(!isExpanded);
  };

  return (
   
    <div >
      {isExpanded ? (
        <ExpandedCard>
          <CardContent>
            <h3>Título do Card</h3>
            <FotoCastelao src={ImgCastelão}/>
            <p>Conteúdo do card. Clique para ver mais detalhes.</p>
            <Details>
              <p>Detalhe 1</p>
              <p>Detalhe 2</p>
              {/* Adicione mais detalhes conforme necessário */}
            </Details>
          </CardContent>
        </ExpandedCard>
      ) : (
        <CardWrapper>
          <CardContent>
            <h3>Título do Card</h3>
            <FotoCastelao src={ImgCastelão}/>
            <p>Castelão</p>
          </CardContent>
        </CardWrapper>
      )}
    </div>
   
  );
};

export default CardEventos2;