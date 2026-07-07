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
    <Overlay>
      <MainContainer>
        <HeaderContainer>
          <Header>{header}</Header>
          <CloseButton onClick={handleClose}>X</CloseButton>
        </HeaderContainer>
        <ContentsContainer>
          <Contents>{children}</Contents>
        </ContentsContainer>
        <FooterContainer>
          <Footer>{footer}</Footer>
        </FooterContainer>
      </MainContainer>
    </Overlay>
  );
}

const Overlay = styled.div``;
const MainContainer = styled.div``;
const HeaderContainer = styled.div``;
const ContentsContainer = styled.div``;
const FooterContainer = styled.div``;
const Header = styled.p``;
const Contents = styled.div``;
const Footer = styled.div``;
const CloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
`;
