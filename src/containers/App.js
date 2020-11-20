import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Header from "../components/Header/Header";
import Profile from "../containers/Profile";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
`;

const AppWrapper = styled.div`
  text-align: center;
  font-family: -apple-system, system-ui, "Segoe UI", Helvetica, Arial,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <AppWrapper className="App">
        <Header />
        <Profile />
      </AppWrapper>
    </>
  );
}

export default App;
