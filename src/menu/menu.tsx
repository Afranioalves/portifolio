import { Link } from 'react-router-dom'
import styles from './Menu.module.scss'

export default function Menu() {
    return (
        <div className={styles.menu}>

            <ul className={styles.menuitem}>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/Venda'>Catalogo</Link></li>
                <li><Link to='/Fale'>Fale conosco</Link></li>
                <li><Link to='/Funcionario'>Trabalhe conosco</Link></li>
            </ul>

        </div>
    )
}