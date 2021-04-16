import styled from 'styled-components'


export const Container = styled.header`
   display: flex;
   align-items: flex-start;
   justify-content: space-between;

   margin: 30px 20px;
`

export const Button = styled.button`
   background: transparent;
   border: none;
   margin-left: 60px;
   color: #f4f4f4;

   svg {
       color: #f4f4f4;
       font-size: 18px;
   }
`;

export const Input = styled.input`
   max-width: 460px;
   width: 460px;
   height: 30px;
   padding: 10px;
   border-radius: 8px;
   border: none;
`