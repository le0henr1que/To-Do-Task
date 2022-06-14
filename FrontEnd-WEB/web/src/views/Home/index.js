import react, {useState, useEffect} from "react";
import * as S from './styles'
import api from '../../services/api'
import {Link, Navigate} from 'react-router-dom'
import isConnected from "../../utils/isConnected";
//Componentes
import Header from '../../components/Header/index'
import Footer from '../../components/Footer/index'
import FilterCard from '../../components/FilterCard/index'
import TaskCard from '../../components/TaskCard/index'

function Home() {
  const [filterActived, setFilterActived] = useState('all');
  const [tasks, setTasks] = useState([])
  const [redirect, setRedirect] = useState(false)

  async function loadTasks(){
    await api.get(`/task/filter/${filterActived}/${isConnected}`)
    .then(response => {
      setTasks(response.data) 
    })
  }
 
  function Notification(){
    setFilterActived("late")
  }

  useEffect(() => {

    loadTasks();

    if(!isConnected)
      setRedirect(true)

  }, [filterActived])

  return (
    <S.Container>   
        {redirect && <Navigate to="/qrcode" /> }
       <Header clickNotification={Notification}/>
      <S.FilterArea>

        <button type="button" onClick={() => setFilterActived("all")}>
          <FilterCard title="Todos" actived={filterActived === 'all'} />
        </button>

        <button type="button" onClick={() => setFilterActived("today")}>
          <FilterCard title="Hoje" actived={filterActived === 'today'}  />
        </button>

        <button type="button" onClick={() => setFilterActived("week")}>
          <FilterCard title="Semana" actived={filterActived === 'week'}  />
        </button>

        <button type="button" onClick={() => setFilterActived("month")}>
          <FilterCard title="Mês" actived={filterActived === 'month'}  />
        </button>
        
        <button type="button" onClick={() => setFilterActived("year")}>
          <FilterCard title="Ano" actived={filterActived === 'year'}  />
        </button>
    
      </S.FilterArea>

      <S.title>
        <h2>{filterActived == 'late' ? "Tarefas Atrasadas" : "Tarefas"}</h2>
      </S.title>
      
      <S.Content>
        {
          tasks.map(t => (
            <Link to={`/task/${t._id}`}>
              <TaskCard type={t.type} title={t.title} when={t.when} done={t.done}/>
            </Link>
          ))
         
        }
      </S.Content>
      
       <Footer/>
    </S.Container>

  )
}

export default Home;
