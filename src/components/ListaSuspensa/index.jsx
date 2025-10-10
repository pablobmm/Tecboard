import './lista-suspensa.estilos.css'
export function ListaSuspensa({children}){
    return(
        <select className='lista-suspensa-form'>
            <option value=""></option>
        </select>
    )
}