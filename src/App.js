import React from "react";

import styled from "styled-components";

const Button = styled.button`
  color: blue;
`;

const App = () => (
  <h1>
    poster-master
    <Button
      onClick={() => {
        alert("hi");
      }}
    >
      click
    </Button>
  </h1>
);

export default App;
