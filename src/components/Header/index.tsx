import React from 'react'
import { useHistory } from 'react-router-dom'
import { FaPowerOff } from 'react-icons/fa'

import { useProfile } from '../../context/LoginContext'

import * as S from './styles'

const Header = () => {

    const history = useHistory()

    const { profile, signOut } = useProfile()

    const handleOut = () => {
       signOut()
       history.goBack()
    }

    return (
        <S.Container>
            <input type="text"/>
            <S.Button  type="button" onClick={handleOut} > <FaPowerOff /> </S.Button>
        </S.Container>
    )
}

export default Header
