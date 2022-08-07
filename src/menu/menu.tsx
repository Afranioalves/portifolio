import { BrowserRouter, Route, Link, Switch} from 'react-router-dom'
import styles from './Menu.module.scss'
import Home from '../../src/pages/Produtos/index'
import Fale from 'pages/Rotas/Fale/fale'
import Funcionario from 'pages/Rotas/Funcionario/funcionario'
import Venda from 'pages/Rotas/Venda/venda'
export default function Menu() {
    return (
        <div className={styles.menu}>
            <BrowserRouter>
                <ul className={styles.menuitem}>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/Venda'>Catalogo</Link></li>
                    <li><Link to='/Fale'>Fale conosco</Link></li>
                    <li><Link to='/Funcionario'>Trabalhe conosco</Link></li>
                </ul>
                <main>
                        <Switch>
                            <Route exact path='/Home'>
                                <Home/>
                            </Route>
                            <Route path='/Fale'><Fale/></Route>
                            <Route path='/Funcionario'><Funcionario /></Route>
                            <Route path='/Venda'><Venda /></Route>
                        </Switch>
                </main>
                </BrowserRouter>
        </div>
    )
}