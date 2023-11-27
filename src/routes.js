import { BrowserRouter, Routes, Route } from 'react-router-dom';

import CadastroTutor from './pages/CadastroTutor/cadastro';


function RoutesApp(){
    return(
        <BrowserRouter>

        <Routes>
            <Route path='/cadastro' element={ <CadastroTutor/> }/>



        </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;