/* eslint-disable require-jsdoc */
import React, { useState } from "react";

import styled, { createGlobalStyle } from "styled-components";

import TopBar from "@/components/TopBar";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    height: 100%;
  }

  body {
    height: 100%;
  }
`;

const Button = styled.button`
  color: blue;
`;

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <h1>
      <GlobalStyle />
      <TopBar />
      poster-master
      {count}
      <Button
        onClick={() => {
          setCount(prevCount => prevCount + 1);
        }}
      >
        click
      </Button>
    </h1>
  );
};

export default App;
