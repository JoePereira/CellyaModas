import { useEffect, useState } from 'react';
import Clientes from './itens.json';
import Nome from './Nome'; 
import styles from './Nomes.module.scss';

interface Props {
    busca: string;
    filtro: number | null;
    ordenador: string;
}

export default function Itens(props: Props) {
    const [ lista, setLista ] = useState(Clientes);
    const { busca, filtro, ordenador } = props;

    function testaBusca(nome: string) {
        const regex = new RegExp(busca, 'i');
        return regex.test(nome);
    }

    function testaFiltro(id: number) {
        if(filtro !== null) return filtro === id;
        return true;
    }

    function ordenar(novaLista: typeof Clientes) {
        switch(ordenador) {
            case 'a-z':
                return novaLista.sort((a,b) => a.nome > b.nome ? 1 : -1);
            case 'z-a':
                return novaLista.sort((a,b) => b.nome > a.nome ? 1 : -1);
            default:
                return novaLista;
        }
    }

    useEffect(() => {
        const novalista = Clientes.filter(nome => testaBusca(nome.nome) && testaFiltro(nome.status.id));
        setLista(ordenar(novalista));
    }, [ busca, filtro, ordenador ])

    return (
        <div className={styles.itens}>
            {lista.map(nome => (
                <div>
                    <Nome key={nome.id} {...nome} />
                </div>
            ))}
        </div>
    )
}