import styles from './Buscador.module.scss';
import { CgSearch } from 'react-icons/cg';
import { memo, useMemo } from 'react';

interface props {
	busca:string,
	setBusca: React.Dispatch<React.SetStateAction<string>>
}

function Buscador({busca, setBusca}: props){
  const cg = useMemo(() => <CgSearch size={20} color="#4C4D5E"/>, []);
  return(
    <div className={styles.buscador}>	
      <input value={busca} onChange={evento => setBusca(evento.target.value)} placeholder="Buscar" />
      {cg}
    </div>
  );
}

export default memo(Buscador);