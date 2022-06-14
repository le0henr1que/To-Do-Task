import styled from 'styled-components'


export const Container = styled.div`
    width: 290px;
    height: 90px;
    background: ${props => props.actived ? '#EE6B26' : '#20295F'};
    border-radius:5px;
    padding:10px;
    margin:5px;

    display:flex;
    flex-direction:column;
    justify-content:space-around;

    cursor:pointer;

    img{
        width:45px;
        height:45px;
    }
    span{
        color:white;
        font-family:sans-serif;
        font-size:18px;
        align-self:flex-end;
    }
    &:hover{
        background:#EE6B26;
    }
  
`