import styled from 'styled-components'; 

export const Container = styled.div`
    width : 100%;
    height : 100vh;
    background-color: #CACACA; 
    

    display: flex ; 
    align-items : center; 
    justify-content : center; 
`

export const Content = styled.div `
    background-color: #ffff ;
    width : 80%; 
    min-height : 350px;
`

export const Row = styled.div`
    display:flex; 
    flex-directiom: row;
    justify-content: space-between; 
    align-items: center; 
`

export const Column = styled.div`
    display:flex; 
    flex-directiom: column:
    justify-content: space-between; 
    align-items: center; 
`