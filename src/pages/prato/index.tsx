import styles from './Item.module.scss';
import { useParams } from 'react-router-dom';

export default function Prato(){
  console.log(useParams());
  return(
    <div className={styles.removerDepois}>
      Prato
    </div>
  );
}