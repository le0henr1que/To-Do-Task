import react, {useState, useEffect} from "react";
import * as S from './styles'
import api from '../../services/api'
import Qr from 'qrcode.react'
import {Navigate} from 'react-router-dom'


//Componentes
import Header from '../../components/Header/index'
import Footer from '../../components/Footer/index'

function QrCode(){
    const [mac, setMac] = useState()
    const [redirect, setRedirect] = useState(false)

    async function saveMac(){
        if(!mac)
            alert("Você precisa informa o número que foi exibido no seu celular")
        else{
            await localStorage.setItem('@todo/macaddress', mac)
            window.location.reload() 
            setRedirect(true) 
        }

    }
    return(
        <S.Container>
            {redirect && <Navigate to="/" /> }
            <Header />
                <S.Content>
                    <h1>Capture o QeCode</h1>
                    <S.QrCodeArea>
                        <Qr value="getmacaddress" size={350}></Qr>
                    </S.QrCodeArea>
                    <S.ValidationCoode>
                        <span>Digite a numeraaçãao que apareceu no celular</span>
                        <input type="text" onChange={e => setMac(e.target.value)} value={mac}></input>
                        <button type="button" onClick={saveMac}>Sincronizar</button>
                    </S.ValidationCoode>
                    <p>Suas Atividades serão sincronizadas com o seu Celular</p>
                </S.Content>


            <Footer/>
        </S.Container>
       )
}

export default QrCode