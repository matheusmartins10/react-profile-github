import React from 'react'
import { FaUser } from 'react-icons/fa'

import Image from '../../assets/image.svg'

import * as S from './styles'

const SignIn = () => {
    return (
        <S.Container>
            <S.Content>
               <FaUser />
               <S.Text> Username </S.Text>
               <S.WrapperContent>
                   <input type="text"/>
                   <button>Entrar</button>
               </S.WrapperContent>
            </S.Content>
            <S.Background>
                <S.BackgroundImage src={Image} alt="image" />
            </S.Background>
        </S.Container>
    )
}

export default SignIn
