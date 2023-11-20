import { createGlobalStyle } from "styled-components";
import "../styles/globals.css";
import CartContextProvider from "@/components/CartContext";

const GlobalStyles = createGlobalStyle`
body{
  background-color: #EEE;
  padding:0;
  margin:0;
  font-family: 'Open Sans', sans-serif;
}`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <CartContextProvider>
        <Component {...pageProps} />
      </CartContextProvider>
    </>
  );
}
