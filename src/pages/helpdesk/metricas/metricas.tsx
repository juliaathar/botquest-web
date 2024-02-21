import './metricas.css'

import MenuLateral from '../../../components/asideHelpdesk'


function Metricas() {
  return (
    <>
      <MenuLateral/>
      <main id='metricas'>
        <section>
          <div className="Metricas">
            <img src="img/menu-hamburguer 1.png" alt="" />
            <h1>Métricas</h1>
          </div>
          <div className="todos_quadrados">
            <div className="quadradinhos">
              <div className="ajuste_barrinha">
                <div className="barrinha_azul" />
                <h2>NPS</h2>
              </div>
              <p>
                Pesquisa quanti-qualitativa, fornece um panorama sobre a fidelidade
                dos seus clientes e quão satisfeitos estão com o que oferecemos.
              </p>
            </div>
            <div className="quadradinhos">
              <div className="ajuste_barrinha">
                <div className="barrinha_azul" />
                <h2>CSAT</h2>
              </div>
              <p>Pequeno questionário (survey) de escala.</p>
            </div>
            <div className="quadradinhos">
              <div className="ajuste_barrinha">
                <div className="barrinha_azul" />
                <h2>Pesquisa de cultura</h2>
              </div>
              <p>Questionário dedicado ao funcionário.</p>
            </div>
            <div className="quadradinhos">
              <div className="ajuste_barrinha">
                <div className="barrinha_azul" />
                <h2>Usuários</h2>
              </div>
              <p>Informações sobre os usuários na plataforma.</p>
            </div>
            <div className="quadradinhos">
              <div className="ajuste_barrinha">
                <div className="barrinha_azul" />
                <h2>Acessos</h2>
              </div>
              <p>Informações sobre a utilização do acessos dos usuários.</p>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Metricas