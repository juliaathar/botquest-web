import "./dataAtual.css"

export default function DataAtual(){
// vvvvvvvvvvvvvv FUNÇÃO DISPLAY DATA ATUAL
  const data = new Date();
  const dia = String(data.getDate()).padStart(2, "0");
  // const mes = String(data.getMonth() + 1).padStart(2, '0');
  const ano = data.getFullYear();

  const semana = [
    "Domingo",
    "Segunda-Feira",
    "Terça-Feira",
    "Quarta-Feira",
    "Quinta-Feira",
    "Sexta-Feira",
    "Sábado",
  ];
  const mês = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  const d = new Date();

  const diaSemana = semana[d.getDay()];
  const mesAtual = mês[d.getMonth()];
  const dataAtual = diaSemana + ", " + dia + " de " + mesAtual + " de " + ano;
  // ^^^^^^^^^^^^^^ FUNÇÃO DISPLAY DATA ATUAL

  return(
    <div id="dataAtual">
        <h1>Visão Geral</h1>
        <span>{dataAtual}</span>
    </div>
  )
}