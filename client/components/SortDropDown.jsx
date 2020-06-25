/* eslint-disable */
import React from 'react';
import styled from 'styled-components';

const SortContainer = styled.div`
  /* position:abolsute; */
  width: 150px;
  height: 122px;
  position: relative;
  border: 1px solid black;
  background-color:white;
  padding: 5px;
`;

const SortList = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:space-around;
  padding-right:10px;
  height:98%;
  text-align:right;

`;

const MR = styled.p`
  &:hover{
    color:firebrick;
  }
`;const TR = styled.p`
  &:hover{
    color:firebrick;
  }
`;const LR = styled.p`
  &:hover{
    color:firebrick;
  }
`;

class SortDropDown extends React.Component {
  constructor(props){
    super(props);
  }


  render(){
    return(
      <SortContainer>
        <SortList id="sort_list">
          <MR>Most Recent</MR>
          <TR>Top Rated</TR>
          <LR>Lowest Rated</LR>
        </SortList>
      </SortContainer>
    )
  }
}

export default SortDropDown