import styles from './Clientes.module.scss';
import logo from 'assets/logoModasCellya.png';

export default function Clientes() {
    return (
        <main>
            <nav className={styles.menu}>
                <img src={logo} alt="logo cellya modas" />
            </nav>
        </main>
    )
}