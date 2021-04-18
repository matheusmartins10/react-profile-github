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

   :first-child {
      background: #f4f4f4;
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

export const Card = styled.ul`
`

export const CardContent = styled.li`
   margin: 20px;
   width: 460px;
   padding: 30px;
   border-radius: 20px;
   background: #fff;
   color: #252525;

   h3 {
      margin-bottom: 10px;

   }

   a {
      color: #ff2052;
   }
`