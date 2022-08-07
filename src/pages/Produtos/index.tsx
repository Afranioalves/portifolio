import styles from "./Produtos.module.scss";
import Buscador from "./Buscador";
import { useState } from "react";
import Filtros from "./Filtros";
import Ordenador from "./Ordenador";
import Itens from './Itens';
import { ReactComponent as Logo } from "assets/Eletronicos.svg";

export default function Produtos() {
  const [busca, setBusca] = useState("");
  const [filtro, setFiltro] = useState<number | null>(null);
  const [ordenador, setOrdenador] = useState("");
  return (
    <main>
      <div className={styles.contmenu}>
        <div>
          <Logo className={styles.logo} />
        </div>   
      </div>

      <header className={styles.header}>
        <div className={styles.header__text}>
          Eletronicos em geral
        </div>
      </header>
      <section className={styles.produtos}>
        <h3 className={styles.produtos__titulo}>Produtos</h3>
        <Buscador busca={busca} setBusca={setBusca} />
        <div className={styles.produtos__filtros}>
          <Filtros filtro={filtro} setFiltro={setFiltro} />
          <Ordenador ordenador={ordenador} setOrdenador={setOrdenador} />
        </div>
        <Itens busca={busca} filtro={filtro} ordenador={ordenador} />
      </section>
    </main>
  )
}