import React from 'react';
import styled from 'styled-components';
import pizzaPic from './pizza.jpg';

const StyledCard = styled.div`
  width: 500px;
  height: 400px;
  /* border: 1px solid #006d77; */
  border-radius: 5px;
  background-color: #ffffff;
  filter: drop-shadow(0.5rem 0.5rem 1rem #83c5be);
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ImageContainer = styled.div`
  height: 200px;
  background-color: teal;
  padding: 0px;
  margin: 0px;
`;

const TextContainer = styled.div`
  padding: 5px;
  color: #005e66;
`;

const ButtonsContainer = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-around;
`;

const Button = styled.button`
  border: none;
  background-color: transparent;
  color: #006d77;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Card = () => {
  return (
    <StyledCard>
      <ImageContainer>
        <Image src={pizzaPic} alt="pizza image" />
      </ImageContainer>
      <TextContainer>
        <h2>SIMPLY DELICIOUS DOUGH & TOPPING</h2>
        <p>
          “Trust me, once you see how simple and tasty this pizza dough recipe
          is you won't want takeaways ”
        </p>
      </TextContainer>
      <ButtonsContainer>
        <Button>get recipe</Button>
        <Button>get ingredients</Button>
      </ButtonsContainer>
    </StyledCard>
  );
};

export default Card;
