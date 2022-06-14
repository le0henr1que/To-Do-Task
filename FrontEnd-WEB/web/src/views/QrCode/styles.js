import styled from 'styled-components';

export const Container = styled.div `
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  
    

`
export const Content = styled.div `
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    

`
export const QrCodeArea = styled.div `
    width: 100%;
    display:flex;
    justify-content: center;
    

`
export const ValidationCoode = styled.div `
    width: 100%;
    display:flex;
    flex-direction: column;
    align-items: center;
    margin:10px;

    span{
        text-transform: uppercase;
        font-weight: bold;
        font-family: sans-serif;
    }
    input{
        font-size: 18px;
        padding:10px;
        text-align: center;
        width: 50%;
    }
    button{
        font-weight: bold;
        background:#EE6B26;
        width: 50%;
        color:#FFF;
        font-size:18px;
        border-radius:30px;
        border:none;
        cursor:pointer;
        margin-top:10px;
        &:hover{
            background: #20295F;
        }
    }
    

`