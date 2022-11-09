import { Header, SideBar, Main, Footer } from "./Layouts";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import {Home} from './Pages'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <SideBar />
      <Main />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
