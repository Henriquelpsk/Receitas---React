import styles from './Ordenador.module.scss';
import classNames from 'classnames';
import opcoes from './opcoes.json';
import { useState, memo } from 'react';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';

interface props{
	ordenador: string,
	setOrdenador: React.Dispatch<React.SetStateAction<string>>
}


function Ordenador({ordenador, setOrdenador} : props){
  const [aberto, setAberto] = useState(false);
  const nomeOrdenador = ordenador && opcoes.find(opcao => opcao.value === ordenador)?.nome;
  return(
    <button className={classNames({
      [styles.ordenador]: true,
      [styles['ordenador--ativo']]: ordenador !== ''
    })} 
    onClick={() => setAberto(!aberto)}
    onBlur={() => setAberto(false)}
    >
      <span>{nomeOrdenador || 'Ordenar Por'}</span>
      {aberto ? <MdKeyboardArrowUp size={20}/> : <MdKeyboardArrowDown size={20}/>}
      <div className={classNames({
        [styles.ordenador__options]: true,
        [styles['ordenador__options--ativo']]: aberto,
      })}>
        {opcoes.map((opcao) => (
          <div 
            className={styles.ordenador__option}
            key={opcao.value}
            onClick={() => setOrdenador(opcao.value)}
          >
            {opcao.nome}
          </div>
        ))}
      </div>
    </button>
  );
}

export default memo(Ordenador);