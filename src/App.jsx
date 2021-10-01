import React, {useState} from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import theme from "./theme";
import Card from "./components/card";
import Profile from "./components/profile";

function App() {
  const [time, useTime] = useState("weekly");

  return (
    <ThemeProvider theme={theme}>
      <Dashboard>
        <GlobalStyle />
        <CardContainer>
          <Profile time={time} useTime={useTime}/>
          <Card time={time} useTime={useTime}/>
        </CardContainer>
      </Dashboard>
    </ThemeProvider>
  );
}

// styled components
const Dashboard = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.bgColor};
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 600px) {
    height: auto;
  }
`;
const CardContainer = styled.div`
  width: 60vw;
  height: 60vh;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;

  @media (max-width: 600px) {
    width: 95%;
    height: auto;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(8, 1fr);
    margin: 5rem 0;
  }
`;

export default App;
