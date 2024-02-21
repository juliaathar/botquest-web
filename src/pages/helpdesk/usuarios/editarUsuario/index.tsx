import MenuLateral from '../../../../components/asideHelpdesk'
import './editUser.css'

import { Link } from 'react-router-dom'
import InputEdit from './input'

export default function EditarUsuario(){
    return(
        <>
            <MenuLateral/>
            <section className="container-edit">
                <section>
                    <div className="titulo-edit">
                        <h2>Editar Usuário</h2>
                        <Link className='link-back' to={"/usuarioHelpdesk"}>
                            Voltar
                            <img src="https://firebasestorage.googleapis.com/v0/b/bqvw-bc2fc.appspot.com/o/goback.png?alt=media&token=68e8d812-f02d-413a-a8c3-500e13cc0576&_gl=1*o3fg1*_ga*OTkzMDE5MjQ4LjE2OTM2Nzk1Mjk.*_ga_CW55HF8NVT*MTY5NzgyNDkyNC4zMi4xLjE2OTc4MjQ5NDYuMzguMC4w" alt="" />
                        </Link>
                    </div>

                        <form action="">
                            <div className="img">
                                <img src="https://firebasestorage.googleapis.com/v0/b/bqvw-bc2fc.appspot.com/o/area-colaborador%2Favatar%204.png?alt=media&token=4bc4599d-d267-46fe-9b45-7b5c419a9a36&_gl=1*1fu8i3a*_ga*OTkzMDE5MjQ4LjE2OTM2Nzk1Mjk.*_ga_CW55HF8NVT*MTY5NzgyNDkyNC4zMi4xLjE2OTc4MjYyNTkuNTMuMC4w" alt="Avatar do Usuário" />
                            </div>
                            <InputEdit
                            htmlFor="name"
                            label="Nome completo"
                            type="text"
                            name="name"
                            placeholder="Nome completo"
                            />
                            <InputEdit
                            htmlFor="email"
                            label="E-mail"
                            type="email"
                            name="email"
                            placeholder="email@email.com"
                            />
                            <InputEdit
                            htmlFor="password"
                            label="Senha"
                            type="password"
                            name="password"
                            placeholder="**********"
                            />
                            <InputEdit
                            htmlFor="gestor"
                            label="Gestor imediatio"
                            type="text"
                            name="gestor"
                            placeholder="Nome do gestor"
                            />
                            <InputEdit
                            htmlFor="setor"
                            label="Setor"
                            type="tel"
                            name="setor"
                            placeholder="Setor"
                            />
                            <InputEdit
                            htmlFor="vwId"
                            label="VW - ID"
                            type="tel"
                            name="vwId"
                            placeholder="Código"
                            />
                            <button>
                                Finalizar
                                <img src="https://firebasestorage.googleapis.com/v0/b/bqvw-bc2fc.appspot.com/o/done.png?alt=media&token=fb0bafba-3a17-491a-9e9e-de48187c3265&_gl=1*19bg326*_ga*OTkzMDE5MjQ4LjE2OTM2Nzk1Mjk.*_ga_CW55HF8NVT*MTY5NzgyNDkyNC4zMi4xLjE2OTc4Mjc1OTguMjQuMC4w" alt="" />
                            </button>
                        </form>

                </section>
            </section>
        </>
    )
}