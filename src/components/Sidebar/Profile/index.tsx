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
        <p> {profile.bio} </p>

        <S.Nav>
            <ul>
              <li>
                <span> <FaAddressCard /> {profile.login} </span>
              </li>
              <li>
                <span> <FaLocationArrow /> {profile.location} </span>
              </li>
              <li>
                <span> <FaBuilding /> {profile.company} </span>
              </li>
            </ul>
        </S.Nav>
    </S.Profile>
    )
}

export default Profile
