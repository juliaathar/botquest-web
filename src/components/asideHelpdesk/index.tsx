import './aside.css'

import dashboard from "../../pages/helpdesk/usuarios/img/Dashboard Layout.png";
import vector from "../../pages/helpdesk/usuarios/img/Vector.png";
import dados from "../../pages/helpdesk/usuarios/img/dados.png";
import setaVoltar from "../../pages/helpdesk/usuarios/img/botao-de-seta-para-a-esquerda 1.png";

import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function MenuLateral(){
    const location = useLocation()  

    const ativo = () => {
        switch(path){
            case "/helpdesk":
                setCorHelpdesk("var(--azulC")
                break
            case "/usuarioHelpdesk":
                setCorUsuarios("var(--azulC")
                break
            case "/metricas":
                setCorMetricas("var(--azulC")
                break
            case "/usuarioHelpdesk/editar-usuario":
                setCorUsuarios("var(--azulC")
                break
           }
    }

    useEffect(() => {
        ativo()
    })
    
    const path = location.pathname
    const [corHelpdesk, setCorHelpdesk] = useState<any>()
    const [corUsuarios, setCorUsuarios] = useState<any>()
    const [corMetricas, setCorMetricas] = useState<any>()

    return(
        <aside id='asideHelpdesk'>
            <nav>
                <ul>
                    <li>
                        <Link
                        className='telaInicial lateralLink' 
                        to={"/helpdesk"}
                        style={{backgroundColor: `${corHelpdesk}`}}
                        >
                            <img src={dashboard} alt="" /> 
                            <span style={{whiteSpace: "nowrap"}}>Tela Inicial</span>
                        </Link>
                    </li>
                    <li>
                        <Link
                        className='lateralUser lateralLink' 
                        to={"/usuarioHelpdesk"}
                        style={{backgroundColor: `${corUsuarios}`}}
                        >
                            <img src={vector} alt="" />
                            <span style={{whiteSpace: "nowrap"}}>Usuários</span>
                        </Link>
                    </li>
                    <li>
                        <Link 
                        className='lateralData lateralLink' 
                        to={"/metricas"}
                        style={{backgroundColor: `${corMetricas}`}}       
                        >                    
                            <img src={dados} alt="" />
                            <span style={{whiteSpace: "nowrap"}}>Metricas</span>                   
                        </Link>
                    </li>
                    <li>
                    <Link className='lateralVoltarConfig' to={"/acessoAdm"}>
                        <img src={setaVoltar} alt="" />  
                        <span style={{whiteSpace: "nowrap"}}>Voltar ao Inicio</span>            
                    </Link>
                    </li>
                </ul>
            </nav>
        </aside>
    )
}