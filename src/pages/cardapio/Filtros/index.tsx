import filtros from './filtros.json';
import styles from './Filtros.module.scss';
import classNames from 'classnames';
import { memo } from 'react';

type Iopcao = typeof filtros[0]
interface props {
	filtro: number | null,
	setFiltro: React.Dispatch<React.SetStateAction<number | null>>
}

function Filtros({filtro, setFiltro}: props){
  function selecionaFiltro(opcao: Iopcao){
    if(filtro === opcao.id) return setFiltro(null);
    return setFiltro(opcao.id);
  }

  return(
    <div className={styles.filtros}>
      {filtros.map((opcao) => (
        <button className={classNames({
          [styles.filtros__filtro]: true,
          [styles['filtros__filtro--ativo']]: filtro === opcao.id,
        })} 
        key={opcao.id} 
        onClick={() => selecionaFiltro(opcao)}
        >
          {opcao.label}
        </button>
      ))}
    </div>
  );
}

export default memo(Filtros);