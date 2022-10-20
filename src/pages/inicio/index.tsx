import cardapio from 'data/cardapio.json';
import styles from './Inicio.module.scss';
import nossaCasaImg from 'assets/nossa_casa.png';
import stylesTema from 'styles/Tema.module.scss';
import { useNavigate } from 'react-router-dom';
import { TPrato } from 'types/Prato';

export default function Inicio() {
  let pratosRecomendados = [...cardapio];
  pratosRecomendados = pratosRecomendados.sort(() => 0.5 - Math.random()).splice(0, 3);
  const navigate = useNavigate();

  function redirecionaDetalhes(prato: TPrato) {
    return (
      navigate(`/prato/${prato.id}`, {state: {prato}})
    );
  }

  return (
    <section>
      <h3 className={stylesTema.titulo}>
        Recomendações da Cozinha
      </h3>
      <div className={styles.recomendados}>
        {pratosRecomendados.map((item) => (
          <div key={item.id} className={styles.recomendado}>
            <div className={styles.recomendado__imagem}>
              <img src={item.photo} alt={item.title} />
            </div>
            <button
              className={styles.recomendado__botao}
              onClick={() => redirecionaDetalhes(item)}
            >
              Ver mais
            </button>
          </div>
        ))}
      </div>
      <h3 className={stylesTema.titulo}> Nossa casa</h3>
      <div className={styles.nossaCasa}>
        <img src={nossaCasaImg} alt="Casa do aluroni" />
        <div className={styles.nossaCasa__endereco}>
          Rua vergueiro, 3185 <br /> <br /> Vila Mariana - SP
        </div>
      </div>
    </section>
  );
}
