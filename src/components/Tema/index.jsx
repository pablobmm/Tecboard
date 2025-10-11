import './tema.estilos.css'
export function Tema({tema}){
    return(
        <h3 className="nomeTema">{tema.nome}</h3>
    )
}