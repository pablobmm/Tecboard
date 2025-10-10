import './formulario-de-evento.estilos.css'
import { CampoDeEntrada } from "../CampoDeEntrada";
import { CampoDeFormulario } from "../CampoDeFormulario";
import { Label } from "../Label";
import { TituloFormulario } from "../TituloFormulario";

export function FormularioDeEvento() {
  return (
    <form className='form-evento'>
      <TituloFormulario >
        Preencha para criar um evento:
      </TituloFormulario>
      <div className="campos">
        <CampoDeFormulario>
          <Label htmlFor='nomeEvento'>
            Qual o nome do evento ?
          </Label>
          <CampoDeEntrada
            type='text'
            id='nomeEvento'
            placeholder='Summer dev hits'
          />
        </CampoDeFormulario>
        <CampoDeFormulario>
          <Label htmlFor='nomeEvento'>
            Data do Evento
          </Label>
          <CampoDeEntrada
            type='date'
            id='dataEvento'
            placeholder='dataEvento'
          />
        </CampoDeFormulario>
      </div>
    </form>
  )
}
