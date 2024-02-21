import "./usuario.css";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../../../utils/api";

import User from "../../../components/user";
import MenuLateral from '../../../components/asideHelpdesk'

export default function Usuario() {

  const [usuarios, setUsuarios] = useState<string[]>([])


  function listarUsuarios(){
    api.get("users").then((response:any) => {
      setUsuarios(response.data)
    })
  }

  useEffect(() => {
    document.title = "Usuários - BQVW ADM";
    listarUsuarios();
  }, []);

  return (
        <>
        <MenuLateral/>
        <main id='usuario'>
          <section>
            <div className="menu_hamburgue">
              <img src="https://firebasestorage.googleapis.com/v0/b/bqvw-bc2fc.appspot.com/o/area-colaborador%2Fmenu-hamburguer%201.png?alt=media&token=9a0aff2d-0f6a-4af4-840e-45bf6e05dd7b" alt="Ícone de menu hambúrguer" />
            </div>
            <div className="Sub_titulos">
              <h1>Usuários</h1>
              <div className="botoes">
                <div className="cad_pesquisa_usuario">
                  <div className="butao_usuarios">
                    <button>Pesquisar usuário<img src="https://firebasestorage.googleapis.com/v0/b/bqvw-bc2fc.appspot.com/o/area-colaborador%2Flupa.png?alt=media&token=23accec5-b77b-4db7-b65c-ec52072af608" alt="" /></button>
                  </div>
                </div>
              </div>
            </div>
            <div className="Solicitacoes">
              <div className="linha_divisoria" />
              <table>
                <thead>
                  <tr>
                    <th>Nome:</th>
                    <th>VW ID</th>
                    <th>Setor:</th>
                    <th>Usuário ativo</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                {usuarios.map((usuario: any, index: number) => {
                  return(
                    <tr
                      key={index}
                    >
                      <User
                      avatar={usuario.user_img}
                      nome={usuario.nome}
                      id={usuario.vwId}
                      setor={usuario.setor}
                      />
                      <td className="ajustar_lapis">
                        <Link to={"editar-usuario"}>
                        <img src="https://firebasestorage.googleapis.com/v0/b/bqvw-bc2fc.appspot.com/o/area-colaborador%2Flapis.png?alt=media&token=97bbbcc5-1307-4b31-9eb3-585f91249e8c" alt="Ícone de edição" />
                        </Link>
                      </td>
                    </tr>
                  )
                })}
                </tbody>
                </table>
                </div>
              </section>
            </main>
          </>
  );
}