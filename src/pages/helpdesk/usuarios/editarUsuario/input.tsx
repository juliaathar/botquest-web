import './editUser.css'

import { Link } from 'react-router-dom'

export default function InputEdit(props:any){
    return(
        <div className="input">
            <label htmlFor={props.htmlFor}>
                {props.label}
                <Link className='edit-link' to={"#"}>Editar</Link>
            </label>
            <input disabled type={props.type} name={props.name} placeholder={props.placeholder} />
        </div>
    )
}