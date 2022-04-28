import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

function Section({
  title,
  description,
  leftButtonText,
  rightButtonText,
  backgroundImage,
}) {
  return (
    <Wrap bgImage={backgroundImage}>
      <Fade bottom>
        <ItemText>
          <h1> {title} </h1>
          <p> {description} </p>
        </ItemText>
      </Fade>

      <Fade bottom>
        <Buttons>
          <ButtonGroup>
            <LeftButton>{leftButtonText}</LeftButton>
            {rightButtonText && <RightButton>{rightButtonText}</RightButton>}
          </ButtonGroup>
          <DownArrow src="./images/down-arrow.svg" alt="down arrow" />
        </Buttons>
      </Fade>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const ItemText = styled.div`
  padding-top: 18vh;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 250px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.8;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin-right: 20px;
  margin-bottom: 20px;
`;

const RightButton = styled(LeftButton)`
  background-color: rgba(255, 255, 255, 0.8);
  opacity: 1;
  color: black;
`;

const DownArrow = styled.img`
  margin-top: 10px;
  height: 50px;
  animation: animateDown 1.5s infinite;
`;

const Buttons = styled.div``;
