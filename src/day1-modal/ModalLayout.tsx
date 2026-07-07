import React from "react";
import styled from "styled-components";

interface Props {
  header: React.ReactNode;
  children: React.ReactNode;
  footer: React.ReactNode;
  handleClose: () => void;
}

export default function ModalLayout({ header, children, footer, handleClose }: Props) {
  return (
    <Overlay
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      <MainContainer>
        <HeaderContainer>
          <Header>{header}</Header>
          <CloseButton onClick={handleClose}>X</CloseButton>
        </HeaderContainer>
        <ContentsContainer>
          <Contents>{children}</Contents>
        </ContentsContainer>
        <Footer>{footer}</Footer>
      </MainContainer>
    </Overlay>
  );
}

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: #00000059;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;
const MainContainer = styled.div`
  width: 382px;
  height: 614px;
  border-radius: 8px;
  padding: 24px 32px;
  gap: 32px;
  background: #fff;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ContentsContainer = styled.div`
  flex: 1;
`;

const Header = styled.p`
  font-size: 18px;
  font-weight: 700;
  margin: 0;
`;
const Contents = styled.div``;
const Footer = styled.footer``;
const CloseButton = styled.button`
  color: #000000;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
`;
