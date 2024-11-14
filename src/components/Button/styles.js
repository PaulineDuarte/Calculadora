import styled from 'styled-components'; 

export const ButtonContainer = styled.button `
    padding: 25px; 
    border: ${({ isBackspace }) => (isBackspace ? '1px solid #CDCDCD' : '1px solid #CDCDCD')};
    background-color: ${({ isOperation }) => (isOperation ? '#462878' : '#2D2A37')};
    color: #FFFFFF; 
    font-size:18px;
    font-weight:400;
    border-radius: 40px;
    margin :5px ;
    gap:5px;
    height:75px;
    flex: 1; 
    letter-spacing: -0.03em
    line-height: 28px;

    &:hover{
        opacity:0.8; 


    }
`