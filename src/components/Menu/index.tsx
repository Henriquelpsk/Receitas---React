import { ReactComponent as Logo } from 'assets/logo.svg';
import styles from './Menu.module.scss';
import rotas from 'data/rotas.json';
import { Link } from 'react-router-dom';

export default function Menu() {
  return (
    <>
      <div className={styles.alinha}></div>
      <nav className={styles.menu}>
        <Logo />
        <ul className={styles.menu__list}>
          {rotas.map(((rota, index) => (
            <li key={index} className={styles.menu__link}>
              <Link to={rota.to}>
                {rota.label}
              </Link>
            </li>
          )))}
        </ul>
      </nav>
    </>
  );
}