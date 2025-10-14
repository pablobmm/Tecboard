import './formulario-de-evento.estilos.css'
import { CampoDeEntrada } from "../CampoDeEntrada";
import { CampoDeFormulario } from "../CampoDeFormulario";
import { Label } from "../Label";
import { TituloFormulario } from "../TituloFormulario";
import { Botao } from '../Botao';
import { ListaSuspensa } from '../ListaSuspensa';

export function FormularioDeEvento({temas}) {
  return (
    <form className='form-evento' >
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
            placeholder="Summer dev hits"
            name='nomeEvento'
          />
        </CampoDeFormulario>
        <CampoDeFormulario>
          <Label htmlFor='capa'>
            Qual o endereço da imagem de capa ?
          </Label>
          <CampoDeEntrada
            type='text'
            id='capa'
            placeholder="http://..."
            name='capa'
          />
        </CampoDeFormulario>
        <CampoDeFormulario>
          <Label htmlFor='nomeEvento'>
            Data do Evento
          </Label>
          <CampoDeEntrada
            type='date'
            id='dataEvento'
            name='dataEvento'
          />
        </CampoDeFormulario>
        <CampoDeFormulario>
          <Label htmlFor='nomeEvento'>
            Tema do Evento
          </Label>
          <ListaSuspensa id="tema" name="tema" itens={temas}/>
        </CampoDeFormulario>
      </div>
      <div className='acoes'>
        <Botao>Criar Evento</Botao>
      </div>
    </form>
  )
}
