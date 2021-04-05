import styled from 'styled-components'

export const Container = styled.div`
   display: flex;
   align-items: stretch;
   height: 100vh;
`;

export const Content = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;

   width: 100%;
   max-width: 40%;

   background: #f4f4f4;
   color: #0f0f0f;

`;

export const WrapperContent = styled.div`
   display: flex;
   padding: 10px;

   input {
       border: 1px solid #0f0f0f;
       padding: 10px;
       border-radius: 10px;
       margin: 5px;
       height: 30px;
   }

   button {
       display: flex;
       align-items: center;

       height: 30px;
       padding: 10px;
       margin: 5px;
       border-radius: 10px;
       border: 1px solid #0f0f0f;
       background: transparent;
   }
`;

export const Background = styled.div`
  flex: 1;
  background: var(--color-styles);
  padding: 30px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BackgroundImage = styled.img`
  width: 460px;
`;

export const Text = styled.h3``;

