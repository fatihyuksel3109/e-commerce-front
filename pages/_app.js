import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Caprasimo&family=Dancing+Script:wght@700&family=Open+Sans:wght@700&family=PT+Serif:wght@700&family=Roboto:ital@1&display=swap');
body{
  padding:0;
  margin:0;
  font-family: 'Roboto', sans-serif;
}`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
        <Component {...pageProps} />
    </>
  );
}
