import React from 'react'
import { FaBuilding, FaLocationArrow, FaAddressCard } from 'react-icons/fa'

import * as S from './styles'
import { useProfile } from '../../../context/LoginContext'

const Profile = () => {

    const { profile } = useProfile()

    return (
    <S.Profile key={profile.id} >
        <img src={profile.avatar_url} alt={profile.name}/>
        <h3> {profile.name} </h3>
        {profile.bio ? <p> {profile.bio} </p> : <p> Nenhuma informacao </p>}

        <S.Nav>
            <ul>
              <li>
                <span> <FaAddressCard style={{marginRight: 5}} /> {profile.login} </span>
              </li>
              <li>
                <span> <FaLocationArrow style={{marginRight: 5}} /> {profile.location} </span>
              </li>
              <li>
                <span> <FaBuilding style={{marginRight: 5}} /> {profile.company} </span>
              </li>
            </ul>
        </S.Nav>
    </S.Profile>
    )
}

export default Profile
