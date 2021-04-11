import styled from 'styled-components'

export const Profile = styled.div`
   display: flex;
   flex-direction: column;
   padding: 30px;
   
   img {
       width: 100px;
       border-radius: 50%;
       margin: 10px auto;
   }

   h3 {
       margin: 15px auto;
   } 
`;

export const Nav = styled.nav`
   
   margin: 30px 0;
   
   ul {
       display: flex;
       flex-direction: column;
       justify-content: space-between;
       
       li {
           margin: 10px 0;

           span {
               font-size: 16px;
               display: flex;
               align-items: center;         
           }

           
        }
   }

`;