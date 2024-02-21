import "./style.css";
import { useEffect, useState, useRef } from "react";
// import Logo from "../cadastro/img/iconeVW.png";
import { useNavigate } from "react-router-dom";

import api from "../../utils/api";

export default function Cadastro() {
  const [setorModel, setsetorModel] = useState<string[]>(
    [
      "Recursos Humanos",
      "Produção",
      "Finanças",
      "Jurídico",
      "Logística"
    ]
  );

 
  //Constante que possui a opcao seleciona
  var [setorSelecionado, setSetorSelecionado] = useState("");
 

  const [tipo_usuario, settipousuario] = useState<string[]>(
    [
      "ADMIN",
      "COMUM"
    ]
  );

 
  //Constante que possui a opcao seleciona
  var [tipouserSelecionado, settipouserSelecionado] = useState("");
 


  // const navigate = useNavigate()

  const [nome, setNome] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [senha, setSenha] = useState<string>("")
  const [vw_id, setvwId] = useState<string>("")
  const [url_img, setImg] = useState<any>()
  const [data_nascimento, setData] = useState<string>("")


  function cadastrarUsuario(event:any) {

    event.preventDefault()

    // fomata o vw_id para 000-00
    const formdata = new FormData()

    formdata.append("nome", nome)
    formdata.append("email", email)
    formdata.append("senha", senha) 
    formdata.append("id_setor", setorSelecionado)
    formdata.append("vw_id", vw_id)
    formdata.append("tipo_usuario", tipouserSelecionado)
    formdata.append("url_img", url_img)
    formdata.append("data_nascimento", data_nascimento)

    switch (setorSelecionado){
      case "Recursos Humanos":
        setorSelecionado = "a67e88cb-d107-11ee-8392-b445067b7f91"
      break;

      case "Produção":
        setorSelecionado = "a7d7b2be-d107-11ee-8392-b445067b7f91"
      break;

      case "Finanças":
        setorSelecionado = "a950e444-d107-11ee-8392-b445067b7f91"
      break;

      case "Jurídico":
        setorSelecionado = "aab913d8-d107-11ee-8392-b445067b7f91"
      break;

      case "Logística":
        setorSelecionado = "ac995c21-d107-11ee-8392-b445067b7f91"
      break;
    }


    // cadastro de usuario
    api.post("usuario", formdata).then((response : any) => {
      console.log(response)
      alert("Usuario criado com sucesso!😊")
      // Navegação para login
      // navigate("/login")
    }).catch((error) => {
      console.log(error)
    })


  }

  function verificarCampoUpload(event:any){
    console.log(event.target.files[0])
    setImg(event.target.files[0]);
  }

  function botao(){
    var checkbox = document.getElementById("checked");
    var botao = document.getElementById('btn_form');

    checkbox?.addEventListener("change", function(){
      if( checkbox?.checkVisibility){
          console.log("Politica de privacidade confirmada.")
      }else{
        botao!.style.cursor = 'not-allowed'
      }


    })
   

  }

  return (
    <>
      <section id="cadastro" className="cadastro">
        <form  className="aba_cadastro" method="post" onSubmit={cadastrarUsuario}>
          <img className="logovw" alt="" src="https://firebasestorage.googleapis.com/v0/b/bqvw-bc2fc.appspot.com/o/icon_vw.png?alt=media&token=0b056a56-9020-4d26-b3ed-cd7bdbd05b2b" />
          <h1>Cadastro</h1>
          <div className="id-input">
            <label className="label" htmlFor="vw_id">VW ID</label>
              <input
                id="vw_id"
                name="vw_id"
                className="input-cadastro"
                placeholder="VW ID"
                type="number"
                maxLength={5}
                minLength={5}
                onChange={(event) => { setvwId(event.target.value) }}
                required
              />
           
          </div>

          <div className="id-input">
            <label className="label" htmlFor="nome">Nome completo</label>
            <input
              name="nome"
              id="nome"
              className="input-cadastro"
              placeholder="Nome completo"
              type="text"
              onChange={(event) => { setNome(event.target.value) }}
              required
            />
          </div>

          <div className="id-input">
            <label className="label" htmlFor="email">E-mail</label>
            <input
              name="email"
              id="email"
              className="input-cadastro"
              placeholder="E-mail"
              type="text"
              onChange={(event) => { setEmail(event.target.value) }}
              required
            />
          </div>

          <div className="id-input">
            <label className="label" htmlFor="data">Data de Nascimento</label>
            <input
              name="data"
              id="data"
              className="input-cadastro"
              placeholder="Data de Nascimento"
              type="date"
              onChange={(event) => { setData(event.target.value)}}
              required
            />
          </div>

          <div className="id-input">
            <label className="label" htmlFor="setor">Setor</label>
            <select
              name="setor"
              id="cad_select_setor"
              onChange={(event) => setSetorSelecionado(event.target.value)}
              defaultValue={setorSelecionado}
            >
              <option selected disabled value="">Selecione o setor</option>
              {
                setorModel.map((sector: any, index: number) => {
                  return <option key={index} value={sector}>{sector}</option>
                })
              }
            </select>

          </div>

          <div className="id-input">
            <label className="label" htmlFor="tipouser">Tipo de usuario</label>
            <select
              name="tipouser"
              id="cad_select_usuario"
              onChange={(event) => settipouserSelecionado(event.target.value)}
              defaultValue={tipouserSelecionado}
            >
              <option selected disabled value="">Tipo de Usuario</option>
              {
                tipo_usuario.map((tipoDeUsuario: any, index: number) => {
                  return <option key={index} value={tipoDeUsuario}>{tipoDeUsuario}</option>
                })
              }
            </select>
          </div>

          <div className="id-input">
            <label className="label" htmlFor="senha">Senha</label>
              <input
                name="senha"
                id="senha"
                className="input-cadastro"
                placeholder="Senha"
                type="password"
                onChange={(event) => { setSenha(event.target.value) }}
                required
              // ref={() => console.log(inputRef)}
              />
            </div>

          <div className="id-input">
          <label className="label" htmlFor="url_img">Foto do usuario</label>
            <input
              name="url_img"
              id="url_img"
              className="input-cadastro"
              type="file"
              onChange={verificarCampoUpload}
              required
            // ref={() => console.log(inputRef)}
            />
          </div>
        </form>
        <div className="aceite">
          <div>
            <input type="checkbox" id="check" name="checkbox" required/>
            <label htmlFor="checkbox">
              Li e aceito os Termos e Condições da corporação
            </label>
          </div>
        </div>
      </section>

    </>
  );
}
