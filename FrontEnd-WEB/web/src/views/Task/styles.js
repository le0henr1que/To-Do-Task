import styled from 'styled-components';

export const Container = styled.div `
    width: 100%;
    display:flex;
    justify-content:center;
    flex-direction:column;
    align-items:center;
    

`

export const Form = styled.div `
    width: 50%;
    display:flex;
    /* align-items:center; */
    justify-content:center;
    flex-direction: column;
    margin-bottom: 100px;

`
export const typeIcons = styled.div `
    width: 100%;
    display:flex;
    align-items:center;
    justify-content:center;

    .inative{
        opacity:0.5;
    }
    button{
        border:none;
        background:none;
    }
    img{
        width:60px;
        height:60px;
        margin:10px;
        cursor:pointer;

        &:hover{
            opacity:0.5;
        }
    }

`
export const Input = styled.div `
  
    width:100%;
    display:flex;
    flex-direction: column;

    span{
        color:#707070;
        margin-top: 5px;
    }

    input{
        font-size: 16px;
        padding: 15px;
        border:none;
        border-bottom:1px solid #707070;
    }
    img{
        width: 20px;
        height:20px;
        position:relative;
        left:90%;
        top:-30px;
    }


`
export const TextArea = styled.div `
  
    width:100%;
    display:flex;
    flex-direction: column;

    span{
        color:#707070;
        margin-top: 5px;
    }

    textarea{
        font-size: 16px;
        padding: 15px;
        border:1px solid #707070;
        
    }
`
export const Options = styled.div `
    display: flex;
    justify-content: space-between;

    button{
        font-weight:bold;
        color:#20295F;
        border:none;
        background:none;
        cursor:pointer;
    }
    &:hover{
        opacity:0.7;
    }
    div{
        display:flex;
        align-items: center;
        color:#EE6B26;
        font-weight: bold;
    }
`
export const Save = styled.div`
width: 100%;
margin-top: 20px;
button{
    width: 100%;
    background:#EE6B26;
    border:none;
    font-size: 20px;
    color:white;
    font-weight: bold;
    padding: 20px;
    border-radius: 30px;
    cursor:pointer;
}
&hover{
    opacity:0.7;
}
`