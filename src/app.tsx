import React from 'react'
import Home from 'pages/Produtos/index'
import Fale from 'pages/Rotas/Fale/fale'
import Funcionario from 'pages/Rotas/Funcionario/funcionario'
import Venda from 'pages/Rotas/Venda/venda'
import Menu from "menu/menu"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
    return(
    <Router>
        <main>
            <Menu />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/Fale' component={Fale} />
                <Route path='/Funcionario' component={Funcionario} />
                <Route path='/Venda' component={Venda} />
            </Switch>
        </main>
    </Router>
    )

}
export default App;