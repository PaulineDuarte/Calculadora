import styled from 'styled-components';

export const Container = styled.div`
  width : 100%;
  height : 100vh;
  background-color: #CACACA; 

    

   display: flex ; 
   align-items : center; 
   justify-content : center; 

  
   


`

export const Content = styled.div`
    background: #2D2A37;
    width : auto; 
   
`

export const Row = styled.div`
    display:flex; 
    flex-directiom: row;
    justify-content: center;
    align-items: center; 
    gap: 5px;
    margin-bottom:5px;

`

export const Column = styled.div`
    display:flex; 
    flex-directiom: column:
    justify-content: space-between; 
    align-items: center; 
`