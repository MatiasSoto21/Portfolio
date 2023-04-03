import "@/styles/globals.css";
import { useState } from "react";
import AppContext from "../utils/AppContext.js"

export default function App({ Component, pageProps }) {
  const [idioma, setIdioma] = useState(false);
  return (<AppContext.Provider value={{ idioma, setIdioma }}><Component {...pageProps} /></AppContext.Provider>)
}
