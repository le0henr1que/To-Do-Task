import react, {useState, useEffect} from "react";
import * as S from './styles'
import api from '../../services/api'
import typeIcons from '../../utils/typeicons'
import { useParams } from 'react-router-dom';
import { Navigate  } from 'react-router-dom';
import {format} from 'date-fns'
import isConnected from "../../utils/isConnected";

import iconCalendar from '../../assets/calendar.png'
import iconClock from '../../assets/clock.png'

//Componentes
import Header from '../../components/Header/index'
import Footer from '../../components/Footer/index'


function Task({match}) {
  const { id } = useParams();
  const [redirect, setRedirect] = useState(false)
  const [type, setType] = useState()
  const [idTask, setId] = useState()
  const [done, setDone] = useState(false)
  const [title, setTitle] = useState()
  const [description, setDescription] = useState()
  const [date, setDate] = useState()
  const [hour, setHour] = useState()

  

  async function LoadTaskDetails(){
    await api.get(`/task/${id}`)
    .then(response => {
      setType(response.data.type)
      setTitle(response.data.title)
      setDescription(response.data.description)
      setDate(format(new Date(response.data.when), 'yyyy-MM-dd'))
      setHour(format(new Date(response.data.when), 'HH:mm'))
    })
   
  }

  async function deleteTask(){
    const res =  window.confirm("Deseja mesmo remover a tarefa?")
    if(res == true){
      await api.delete(`/task/${id}`)
      .then(
        setRedirect(true)
      )
    }
  }

  async function Save(){

    // Validação dos dados
    if(!title)
      return alert("Você precisa informar o titulo da terefa")
    if(!description)
      return alert("Você precisa informar a descrição da terefa")
    if(!type)
      return alert("Você precisa informar o tipo da terefa")
    if(!date)
      return alert("Você precisa informar a data da terefa")
    if(!hour)
      return alert("Você precisa informar a hora da terefa")

    if(id){
      await api.put(`task/${id}`, {
        macaddress: isConnected,
        done,
        type,
        title,
        description,
        when:`${date}T${hour}:00.00`
      }).then(()=>{
        setRedirect(true)
      })
    }else{
      await api.post('/task', {
        macaddress: isConnected,
        type,
        title,
        description,
        when:`${date}T${hour}:00.00`
      }).then(()=>{
        setRedirect(true)
      })
    }
  }

  useEffect(() => {
    if(!isConnected)
      setRedirect(true)
    LoadTaskDetails();
  }, [])

  return (
    <S.Container>   
      {redirect && <Navigate to="/" /> }
       <Header />

       <S.Form>
            <S.typeIcons>
            {
                typeIcons.map((icon, index) => (
                    index > 0 &&
                    <button type="button" onClick={() => setType(index)}>
                        <img src={icon} alt="Tipo da tarefa" 
                        className={type && type !== index && 'inative' }/>
                    </button> 
                ))
            }
            </S.typeIcons>
            <S.Input>
              <span>Título</span>
              <input type="text" placeholder="Titulo da Terefa" onChange={e => setTitle(e.target.value)} value={title}/>
            </S.Input>

            <S.TextArea>
              <span>Descrição</span>
              <textarea rows={5} placeholder="Descrição da Tarefa" onChange={e => setDescription(e.target.value)} value={description}/>
            </S.TextArea>

            <S.Input>
              <span>Data</span>
              <input type="date" placeholder="Dara da Terefa" onChange={e => setDate(e.target.value)} value={date}/>
              <img src={iconCalendar} alt="Calendario"/>
            </S.Input>

            <S.Input>
              <span>Hora</span>
              <input type="time" placeholder="Hora da Terefa" onChange={e => setHour(e.target.value)} value={hour}></input>
              <img src={iconClock} alt="Hora"/>
            </S.Input>

            <S.Options>
              <div>
                <input type="checkbox" checked={done} onChange={() => setDone(!done)}/>
                <span>ConcluidTasko</span>
              </div>
             {id && <button type="button" onClick={deleteTask}>Excluir</button>}
            </S.Options>
            <S.Save>
              <button type="button" onClick={Save}>SALVAR</button>
            </S.Save>

       </S.Form>
    
       <Footer/>
    </S.Container>

  )
}

export default Task;
