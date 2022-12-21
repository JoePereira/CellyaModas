import styles from './Clientes.module.scss';
import logo from 'assets/logoModasCellya.png';
import Buscador from './buscador';
import { useState } from 'react';

export default function Clientes() {
    const [busca, setBusca] = useState("");
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
            </section>
        </main>
    )
}