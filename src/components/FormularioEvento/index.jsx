import { TituloFormulario } from "../TituloFormulario";

export function FormularioDeEvento(){
  return(
    <form className='form-evento'>
        <TituloFormulario >
          Preencha para criar um evento:
        </TituloFormulario>
      <fieldset>
        <label htmlFor='nome'>
          Qual o nome do evento ?
        </label>
        <input type='text' id='nome' placeholder='Summer dev hits'/>
      </fieldset>
    </form>
  )
}
