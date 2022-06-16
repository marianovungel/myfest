import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {useContext} from 'react'
import {Context} from './Context/Context'
import Venda from './pages/Venda/Venda'
import Login from './pages/Login/Login'
import Registrar from './pages/Registrar/Registrar'
import SingleVenda from './pages/SingleVenda/SingleVenda';
import SingleDesapego from './pages/SingleDesapego/SingleDesapego';
import Desapego from './pages/Desapego/Desapego';
import Aluguel from './pages/Aluguel/Aluguel';
import Compartilhar from './pages/Compartilhar/Compartilhar';
import CadastrarAluguel from './pages/CadastrarAluguel/CadastrarAluguel';
import CadastrarCompartilhar from './pages/CadastrarCompartilhar/CadastrarCompartilhar';
import SingleAluguel from './pages/SingleAluguel/SingleAluguel';
import SingleCompartilhar from './pages/SingleCompartilhar/SingleCompartilhar';
import Sobre from './pages/Sobre/Sobre';
import EditAluguel from './pages/EditAluguel/EditAluguel';
import EditCompartilhar from './pages/EditCompartilhar/EditCompartilhar';

function App() {

  const {user} = useContext(Context);

  return (
      <BrowserRouter>
        <Routes> 
          <Route path="/" element={ user ? <Venda /> : <Login />} exact />
          <Route path="/desapego" element={ user ? <Desapego /> : <Login />} exact />
          <Route path="/habitacao/aluguel" element={ user ? <Aluguel /> : <Login />} exact />
          <Route path="/habitacao/aluguel/:id" element={ user ? <SingleAluguel /> : <Login />} exact />
          <Route path="/aluguel/edit/:id" element={ user ? <EditAluguel /> : <Login />} exact />
          <Route path="/compartilhar/edit/:id" element={ user ? <EditCompartilhar /> : <Login />} exact />
          <Route path="/aluguel/cadastrando" element={ user ? <CadastrarAluguel /> : <Login />} exact />
          <Route path="/habitacao/compartilhar" element={ user ? <Compartilhar /> : <Login />} exact />
          <Route path="/habitacao/compartilhar/:id" element={ user ? <SingleCompartilhar /> : <Login />} exact />
          <Route path="/habitacao/compartilhar" element={ user ? <Compartilhar /> : <Login />} exact />
          <Route path="/compartilhar/cadastrar" element={ user ? <CadastrarCompartilhar /> : <Login />} exact />
          <Route path="/post/:id" element={user ? <SingleVenda />  : <Login />} />
          <Route path="/desapego/:id" element={user ? <SingleDesapego />  : <Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/registrar" element={<Registrar />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;