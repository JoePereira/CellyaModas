import CienteImg from 'assets/customer.png';
import styles from './Nome.module.scss';
import cliente from "../itens.json";
import classNames from 'classnames';
import { ReactComponent as Estrela } from 'assets/estrela.svg';

type Props = typeof cliente[0];

export default function Nome(props: Props) {
    const { nome, endereco, idade, cpf, rg, status } = props;
    return (
    <div className={styles.item}>
        <div className={styles.item__imagem}>
            <img src={CienteImg} alt={nome} />
        </div>
        <div className={styles.item__descricao}>
            <div className={styles.item__titulo}>
                <h2> {nome} </h2>
                <p>Endereço: {endereco} <br/> idade: {idade} <br/> CPF: {cpf} <br/> RG: {rg} </p>
            </div>
            <div className={styles.item__tags}>
                <div className={classNames({
                    [styles.item__tipo]: true,
                    [styles[`item__tipo__${status.label}`]]: true
                })}>
                    {/* <img src={status.estrela} alt={status.label} />  */}
                    <Estrela className={styles[`item__tipo__${status.label}`]} />
                </div>
                <button className={styles.item__cobrar}>
                    Cobrar
                </button>
                <button className={styles.item__vender}>
                    Vender
                </button>
            </div>
        </div>
    </div>
    );
}