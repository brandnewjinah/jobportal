import React from "react";

//import components
import Footer from "./Footer";

//import styles and assets
import styled from "styled-components";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <Container>
        <div>{children}</div>
      </Container>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Container = styled.main`
  width: 100%;
  max-width: 1040px;
  padding: 2em;
  margin: 0 auto;
`;

export default Layout;
