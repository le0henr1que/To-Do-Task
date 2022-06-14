import react, {useState, useEffect} from "react";
import logo from '../../assets/logo.png'
import bell from '../../assets/bell.png'
import {Link} from 'react-router-dom'
import api from '../../services/api'
import isConnected from "../../utils/isConnected";

import * as S from './styles'


function Header({clickNotification}) {
  const [lateCount, setlateCount] = useState()

  async function lateVerify(){
    await api.get(`/task/filter/late/${isConnected}`)
    .then(response => {
      setlateCount(response.data.length) 
    })
  }
  useEffect(() => {
    lateVerify()
  })
  async function desconected(){
    localStorage.removeItem('@todo/macaddress')
    window.location.reload()
  }
    return (
      <S.Container>
        <S.LeftSide>
          <img src={logo} alt="Logo"/>
        </S.LeftSide>

        <S.RightSide>
          <Link to="/">INÍCIO</Link>
          <Link to="/Task">NOVA TAREFA</Link>
        {
         
          isConnected 
            ?
            <button type="button" onClick={desconected}>SAIR</button>
            :
            <Link to="/qrcode">SINCRONIZAR CELULAR</Link>
          
        }
          <button id="notification" onClick={clickNotification}>
            <img src={bell} alt="Notificação" />
            <span>{!lateCount ? "0" : lateCount }</span>

          </button>
        </S.RightSide>
      </S.Container>
    )
  }
  
  export default Header;
  