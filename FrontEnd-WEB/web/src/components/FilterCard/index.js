import react from 'react';

import filter from '../../assets/Funnel.png'

import * as S from './styles'


function FilterCard({title, actived}) {
    return (
      <S.Container actived={actived}>
          <img src={filter} alt="filtro"/>
          <span>{title}</span>
      </S.Container>
    )
  }
  
  export default FilterCard;
  