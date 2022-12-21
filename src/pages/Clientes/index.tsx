import styles from './Clientes.module.scss';
import logo from 'assets/logoModasCellya.png';
import Buscador from './Buscador';
import { useState } from 'react';
import Filtros from './Filtros';

export default function Clientes() {
    const [busca, setBusca] = useState("");
    const [filtro, setFiltro] = useState<number | null>(null);
    return (
        <main>
            <nav className={styles.menu}>
                <img src={logo} alt="logo cellya modas" />
            </nav>
            <header className={styles.header}>
                <div className={styles.header__text}>
                    Clientes
                </div>
            </header>
            <section className={styles.clientes}>
                <h3 className={styles.clientes__titulo}>
                    Lista de Clientes
                </h3>
                <Buscador 
                    busca = {busca}
                    setBusca = {setBusca}
                />
                <div className={styles.clientes__filtros}>
                    <Filtros filtro={filtro} setFiltro={setFiltro} />
                </div>
            </section>
        </main>
    )
}