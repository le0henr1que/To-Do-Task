import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;

`
export const FilterArea = styled.div`
    width: 100%;
    display:flex;
    justify-content:space-around;
    flex-wrap: wrap;
    margin-top:30px;
    button {
        background:none;
        border:none;
    }

`
export const Content = styled.div`
    width: 100%;
    display:flex;
    justify-content:center;
    flex-wrap: wrap;
    margin-top:30px;
    margin-bottom:100px;
    a {
        text-decoration:none;
        color:#000;
    }
`

export const title = styled.div`
    width: 100%;
    display:flex;
    justify-content:center;
    margin-top:30px;
    border-bottom: 1px solid #20295F;

    h2{
        background:white;
        padding:0 10px;
        color: #20295F;
        font-family:sans-serif;
        position:relative;
        top:30px;
    }
    
`