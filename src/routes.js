import React from 'react';
import {BrowserRoutes,switch, Routes, Route} from 'react-router-dom'
import App from './App'
import CadPessoa from './Cadastro'

const Routes = () =>{
    <BrowserRoutes>
    <Switch>
        <Route exact path="/" component={App}/>
            <Route  path="/Cad" component={CadPessoa} />
    </Switch>
    </BrowserRoutes>
}