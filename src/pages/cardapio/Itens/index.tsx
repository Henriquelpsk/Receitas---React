import itens from 'data/cardapio.json';
import style from './Itens.module.scss';
import Item from './Item';
import { useEffect, useState } from 'react';

interface props {
	busca: string,
	filtro: number | null,
	ordenador: string
}

export default function Itens({ busca, filtro, ordenador }: props) {
  const [lista, setLista] = useState(itens);

  function testaBusca(titulo: string) {
    const regex = new RegExp(busca, 'i');
    return (
      regex.test(titulo)
    );
  }

  function testaFiltro(id: number) {
    if (filtro !== null) return filtro === id;
    return true;
  }

  function ordenarPropriedadeCrescente(novalista : typeof lista, propriedade: 'size' | 'serving' | 'price'){
    return novalista.sort((a, b) => a[propriedade] > b[propriedade] ? 1 : -1);
  }

  function ordenar(novaLista : typeof lista){
    switch(ordenador){
    case 'porcao':
      return ordenarPropriedadeCrescente(novaLista,'size');

    case 'qtd_pessoas':
      return  ordenarPropriedadeCrescente(novaLista,'serving');

    case 'preco':
      return  ordenarPropriedadeCrescente(novaLista,'price');
			
    default:
      return novaLista;
			
    }
  }

  useEffect(() => {
    const novaLista = itens.filter((item) => testaBusca(item.title) && testaFiltro(item.category.id));
    setLista(ordenar(novaLista));

  }, [busca, filtro, ordenador]);
  return (
    <div className={style.itens}>
      {lista.map((item) => (
        <Item key={item.id} {...item} />
      ))}
    </div>
  );
}