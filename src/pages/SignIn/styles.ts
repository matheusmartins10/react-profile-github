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
   max-width: 50%;

   background: #f4f4f4;
   color: #0f0f0f;

`;

export const ProfilePhoto = styled.img`
   width: 150px;
`;

export const WrapperContent = styled.div`
   display: flex;
   padding: 10px;

   input {
       display: flex;
       align-items: center;
       justify-content: center;

       margin: 10px 0;
       border: none;
       padding: 10px;
       border-radius: 10px;
       height: 40px;
       width: 200px;
   }

   button {
       display: flex;
       align-items: center;
       justify-content: center;

       width: 200px;
       height: 40px;
       padding: 10px;
       border: none;
       border-radius: 10px;
       background: var(--color-styles);
       color: #f4f4f4;
       font-weight: bold;
   }
`;

export const Background = styled.div`
  flex: 1;
  background: var(--color-styles);
  padding: 30px;

  display: flex;
  align-items: center;
  justify-content: center;

  @media(max-width: 546px) {
     display: none;
  }
`;

export const BackgroundImage = styled.img`
  width: 460px;
`;

export const Text = styled.h3``;

