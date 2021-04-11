import React from 'react'

import Sidebar from '../../components/Sidebar/sidebar'
import Main from '../../components/Main'

import * as S from './styles'

const Dashboard = () => {

    return (
    <S.Container>
       <Sidebar />
       <Main />
    </S.Container>
    )
}

export default Dashboard
