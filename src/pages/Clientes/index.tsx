import styles from './Clientes.module.scss';
import logo from 'assets/logoModasCellya.png';

export default function Clientes() {
    return (
        <main>
            <nav className={styles.menu}>
                <img src={logo} alt="logo cellya modas" />
            </nav>
            <header className={styles.header}>
                <div className={styles.header__text}>
                    Lista de Clientes
                </div>
            </header>
        </main>
    )
}