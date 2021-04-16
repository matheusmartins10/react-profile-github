import React, { FormEvent, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { FaPowerOff } from 'react-icons/fa'

import { useProfile } from '../../context/LoginContext'

import api from '../../services/api'

import * as S from './styles'

export type Repository = {
    id: number;
    full_name: string;
    description: string;
    owner: {
      login: string;
      avatar_url: string;
    };
  }

const Header = () => {

    const [repository, setRepository] = useState('')
    const [repo, setRepo] = useState<Repository[]>([])

    const history = useHistory()

    const { profile, signOut } = useProfile()

    const handleOut = () => {
       signOut()
       history.goBack()
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
         e.preventDefault()

         const response = await api.get<Repository>(`repos/${repository}`)

         const repos = response.data
         setRepo([...repo, repos])
         setRepository('')
    }

    console.log(repo)

    return (
      <>
        <S.Container>
            <form onSubmit={handleSubmit}>
                 <S.Input type="text" value={repository} onChange={(e) => setRepository(e.target.value)}  />
                 <S.Button type="submit" > pesquisar </S.Button>
            </form>
            <S.Button  type="button" onClick={handleOut} > <FaPowerOff /> </S.Button>
        </S.Container>
        <ul>
          {repo.map(repository => (
            <li key={repository.id} >
                <h3>  {repository.full_name} </h3>
                <span>  {repository.description} </span>
            </li>
          ))}
       </ul>
      </>
    )
}

export default Header
