import "./style.css";

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import Loader from "../../components/loader";

import CardTarefa from "../../components/cardTarefa";
import CardNovidade from "../../components/cardNovidade";

import api from "../../utils/api";
import PerfilUsuario from "../../components/perfilUsuario";
import DataAtual from "../../components/dataAtual";

// import logado from '../../main';

export default function AreaColaborador(props: any) {
  const [idUsuario, setIdUsuario] = useState<any>( localStorage.getItem('idUsuario') )

  const [tarefas, setTarefas] = useState<any[]>([]);
  const [tarefasDois, setTarefasDois] = useState<any[]>([]);
  const [novidades, setNovidades] = useState<any[]>([]);
  const [titulo, setTitulo] = useState("");

  const [nome, setNome] = useState<string>("");
  const [url_img, seturl_img] = useState<string>("");
  const [vw_id, setVwId] = useState<string>("");

  function buscarUsuarioPorID() {
    api
      .get(`usuario/${idUsuario}`)
      .then((response: any) => {
        setNome(response.data.nome);
        seturl_img(response.data.url_img);
        setVwId(response.data.vw_id);
        console.log("ajjajaj")
        console.log(response.data.url_img)

        

      })
      .catch((error) => {
        console.log(error);
      });
  }

  // function listarTarefas() {
  //   api
  //     .get(`/tarefas`)
  //     .then((response: any) => {
  //       setTarefas(response.data);
  //     })
  //     .catch((error) =>
  //       console.log("Erro ao obter os dados das tarefas", error)
  //     );
  // }


  function listarTarefas() {
    api
      .get(`usuario/${idUsuario}/chamado`)
      .then((response: any) => {
        setTarefas(response.data);
      })
      .catch((error) =>
        console.log("Erro ao obter os dados das tarefas", error)
      );
  }
  // LISTA TAREFAS JÁ CADASTRADAS NA API POR ID USER



  // function listarNovidades() {
  //   api
  //     .get("/novidades")
  //     .then((response: any) => {
  //       setNovidades(response.data);
  //     })
  //     .catch((error) =>
  //       console.log("Erro ao obter os dados das novidades", error)
  //     );
  // }

  // function addTask(event: any) {
  //   event.preventDefault();
  //   const formdata = new FormData();

  //   formdata.append("titulo", titulo);

  //   api
  //     .post("tarefas", formdata)
  //     .then((response: any) => {
  //       console.log(response);
  //       alert("Tarefa adicionada!");
  //       window.location.reload();
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });

  //   api.post;
  // }

  // VAI ADICIONAR AS TAREFAS DO CAMINHO "API/TAREFAS"
  // UTILIZANDO POR ENQUANTO APENAS PARA DEMONSTRAÇÃO DO SITE, NÃO ESTÁ FUNCIONAL


  // function addTask(event: any) {
  //   event.preventDefault();
    
  //   api.patch(`users/${idUsuario}`, {
  //     "tarefas": [
  //       {"titulo": titulo}
  //     ]
  //   }).then((response:any) => {
  //       console.log(response)
  //       window.location.reload()
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });

  //   api.post;
  // }

  useEffect(() => {
    listarTarefas();
    // listarNovidades();
    buscarUsuarioPorID();
  }, []);

  // vvvvvvvvvvvvvv FUNÇÃO LOADER
  const [visible, setVisible] = useState(true);

  // const handleTime = () => setTimeout(() => setVisible(true), 1500);
  // handleTime();
  // ^^^^^^^^^^^^^^ FUNÇÃO LOADER

  return (

    <main id="area_colaborador">
      { idUsuario != '' ? (
        <>
          {visible == true ? (
            <>
              <section className="left">
                <DataAtual/>
                <div>
                  <div className="card">
                    <h2
                      style={{
                        marginBottom: "10px",
                      }}
                    >
                      Histórico de chamados
                    </h2>
                    <div
                      className="listaChamados"
                      style={{
                        listStyleType: "none",
                        height: "85%",
                      }}
                    >
                      <table>
                          <tr className="table-header">
                            <th>Data chamado</th>
                            <th>Descrição</th>
                            <th>Status</th>
                          </tr>
                          {
                  
                            tarefas.map( (item : any) => {
                              return (<tr>
                                  <td>{ item.data_chamado }</td>  
                                  <td>{ item.descricao }</td>  
                                  <td>{ item.situacao ? 'Em andamento' : 'Concluído' }</td>  
                                </tr>
                              )
                              
                            })

                            
                          }


                      </table>
                    </div>
                  </div>
                </div>
              </section>
              <PerfilUsuario url_img={url_img} nome={nome} vw_id={vw_id} />
            </>
          ) : (
            <>
              <div
                style={{
                  display: "flex",
                  height: 500,
                  width: "100vw",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 1,
                }}
              >
                <Loader />
              </div>
            </>
          )}
        </>
      ) : (
        <>
          <section id="message_login">
            <img
              style={{
                width: "150px",
              }}
              src="https://firebasestorage.googleapis.com/v0/b/bqvw-bc2fc.appspot.com/o/area-colaborador%2Fsad.png?alt=media&token=90071968-52f6-43c0-bd5f-544762c1218f"
              alt=""
            />
            <p>Você não está logado 😥</p>
            <h1>Faça seu login!</h1>
            <Link
              style={{
                color: "var(--verdeC)",
              }}
              to={"/login"}
            >
              Clique aqui
            </Link>
          </section>
        </>
      )}
    </main>
  );
}
