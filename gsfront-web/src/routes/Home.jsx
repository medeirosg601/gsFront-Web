import "../css/Home.scss"
import Cabecalho from "../components/Header";
import Rodape from "../components/Footer";
import Medicamento from "../img/medicamento.jpg"
import Pilula from "../img/pilula.png"

export default function Home() {
    document.title = "Home";
    
    if (sessionStorage.getItem("token-usuario")){
    return (
      <>
        <div className="geral">
            <div className="header-1">
              <Cabecalho/>
            </div>

            <div className="container">
              <header>
                <img src={Medicamento} alt="Medicamento" />
              </header>
              <nav>
                <h1>O que é a solução? </h1>
                  <p> PillCare é uma solução integrada para gerenciar medicamentos, oferecendo lembretes de dosagem, monitoramento e conexão com profissionais de saúde. Facilita a adesão ao tratamento e promove uma vida saudável. </p>
                <h1>O que ela fará?</h1>
                  <p> A solução PillCare supervisiona horários de medicação, alerta sobre doses e interações, mantendo históricos detalhados. Simplifica a gestão de remédios, auxiliando na conformidade com o tratamento e promovendo cuidados personalizados. </p>
                <h1>Como funcionará? </h1>
                  <p> O sistema PillCare emprega dispositivos conectados para monitorar a ingestão de medicamentos. Integrando notificações via app, detecta padrões de uso, sincronizando-se com profissionais de saúde para garantir adesão e controle do tratamento. </p>
              </nav>

              <h1 className="marca"> PillCare </h1>
              <h2>PillCare revoluciona o gerenciamento de medicamentos, usando dispositivos conectados para rastrear e notificar a administração correta, proporcionando controle e adesão ao tratamento. </h2>
              <button>Mais informações</button>
            </div>

            <div className="vantagens">
              <h1> Vantagens </h1>
            </div>
            <div className="cards">
                    <div className="card">
                        <h2> Precisão na Administração</h2>
                        <img src={Pilula} alt="" />
                        <p>  PillCare oferece doses precisas e alertas, garantindo que os medicamentos sejam tomados no horário correto.  </p>
                        <button> Saiba mais </button>
                    </div>

                    <div className="card">
                        <h2> Controle e Monitoramento </h2>
                        <img src={Pilula} alt="" />
                        <p> Proporciona aos usuários e cuidadores uma visão em tempo real do histórico de medicamentos, possibilitando ajustes quando necessário.</p>
                        <button> Saiba mais </button>
                    </div>

                    <div className="card">
                        <h2> Aumento da Adesão ao Tratamento</h2>
                        <img src={Pilula} alt="" />
                        <p>  Com lembretes personalizados e informações acessíveis, melhora a adesão dos pacientes aos regimes medicamentosos. </p>
                        <button> Saiba mais </button>
                    </div>
                </div>


                <footer>
                  <Rodape/>
                </footer>
              </div>
      </>
    )}
  } 