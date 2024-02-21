import "./editar.css";

export default function CadastrarUsuario() {

    function Salvar() {
        alert("Seu cadastro foi salvo com sucesso!!")
    }


    // function Sair (){
    //     const usuario = 
    // }

    return (
        <>

            <div className="body slide-in-fwd-left"  >


                <div className="perfil ">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={150}
                        height={150}
                        viewBox="0 0 234 234"
                        fill="none"
                    >
                        <circle cx={117} cy={117} r={117} fill="#D9D9D9" />
                    </svg>
                    <h2>Nome do usuário</h2>
                    <div className="span">
                        <span>Na empresa desde: ....</span>
                        <span >Na plataforma desde: ....</span>
                    </div>
                </div>
                <div className="editar_esquerda">
                    <div className="editar">
                        <div className="retangulo"></div>
                        <h2 className="texto ">Cadastrar Usuario</h2>
                    </div>
                    <input type="text" name="Nome" placeholder=" Nome completo" />
                    <input type="date" name="Data" placeholder="Data" />
                    <input type="text" placeholder=" E-mail" maxLength={20} />
                    <input id="olho" type="password" placeholder=" Senha" maxLength={12} />
                </div>

                <div className="editar_direita">

                    <input type="text" placeholder=" Gestor imediato" maxLength={20} />
                    <input type="text" placeholder=" Direção" maxLength={6} />
                    <input type="text" placeholder=" VW - ID" maxLength={5} />
                    <div className="botao">
                        <button onClick={Salvar} className="salvar" type="reset">
                            Adicionar usuário
                        </button>
                        <div>
                            <button className="sair" onClick={() => {
                                    const url : string = 'http://localhost:5173/usuarioHelpdesk'
                                    window.location.href = url 

                            }}>Sair</button>
                        </div>
                    </div>

                </div>

            </div>

        </>
    );
}