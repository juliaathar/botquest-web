import "./style.css";

import { Image } from "../../components/Image";
import Loader from "../../components/loader";

import api from "../../utils/api";

import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

import { jwtDecode } from "jwt-decode";
import React, { useState } from 'react';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagemErro, setMensagemErro] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const resposta = await api.post('login', {
        email,
        senha
      }).then( response => {
        const decoded : any = jwtDecode(response.data.token)

        localStorage.setItem("idUsuario", decoded.idUsuario)
        localStorage.setItem("token", response.data.token)
        
        navigate("/area-colaborador");
        navigate(0);
      } )

    } catch (erro) {
      console.error('Erro durante a solicitação:', erro);
      setMensagemErro('Ocorreu um erro durante a solicitação. Por favor, tente novamente mais tarde.');
    }
  };
  return (
    <>
      <>
        <form method="post">
          <div id="main_login" className="dados">
            <Image
              class="img_vw"
              source="https://firebasestorage.googleapis.com/v0/b/unify-v3-copy.appspot.com/o/nicismpcs6-271%3A9?alt=media&token=34022096-56d5-4eb8-801a-3b8328125e59"
            />
            <h1>Login</h1>

            <div className="id-input">
              <input
                className="input-login"
                name="email"
                type="email"
                id="email"
                placeholder="E-mail"
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className="label" htmlFor="email">E-mail</label>
            </div>

            <div className="id-input">
              <input
                className="input-login"
                name="password"
                type="password"
                id="Senha"
                placeholder="Senha"
                onChange={(e) => setSenha(e.target.value)}
              />
              <label className="label" htmlFor="password">Senha</label>
            </div>
            <button
              onClick={handleLogin} style={{ border: "none", }} type="button">Acessar</button>
            {mensagemErro && <p>{mensagemErro}</p>}
            {/* <GoogleAuth /> */}

            <p style={{ marginTop: "10px" }}>
              Esqueceu sua senha?{" "}
              <a style={{ color: "#ffffff" }} href="/recuperation">
                Clique aqui.
              </a>
            </p>
          </div>
        </form>
        <Link to={"/acessoAdm"}>
          <div id="admin-button">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/bqvw-bc2fc.appspot.com/o/adm.png?alt=media&token=77b88b4f-4dfa-4ac7-a946-708db70e0e0e"
              alt=""
            />
          </div>
        </Link>
      </>

      : (
      <>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: 500,
          }}
        >
          <Loader />
        </div>
      </>
      )
    </>
  );
}
export default Login;
