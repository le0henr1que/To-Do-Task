import styled from 'styled-components'


export const Container = styled.div`
    width: 250px;
    height: 200px;
    box-shadow: 1px 2px 12px 3px #68635A;
    border-radius:10px;
    margin:10px;

    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    font-family:sans-serif;
    cursor:pointer;
    opacity:${props => props.done ? 0.5 : 1};
    &:hover{
        opacity:0.5;
    }

`
export const TopCard = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
  
`
export const BottomCard = styled.div`
    width: 100%;
    display:flex;
    align-items:center;
    justify-content:space-around;
  
    strong{
        color:#EE6B26;
    }
    span{
        color:#707070;
    }
`