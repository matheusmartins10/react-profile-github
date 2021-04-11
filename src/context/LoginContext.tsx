import React, { createContext, useState, useEffect, useCallback, useContext } from 'react'

import { useHistory } from 'react-router-dom'

import api from '../services/api'

type SignInProps = {
    username: string
}

type ProfileProps = {
   id: number
   login: string
   avatar_url: string
   name: string
   bio: string
   location: string
   company: string
}

type LoginContextData = {
    profile: ProfileProps
    signIn: (credentials: SignInProps ) => Promise<void>
    signOut(): void
}

const LoginContext = createContext<LoginContextData>({} as LoginContextData)

export const LoginProvider: React.FC = ({ children }) => {

    const history = useHistory()

    const [profile, setProfile] = useState<ProfileProps>(() => {
        const storageProfile = localStorage.getItem('@Github:profile')

        if(storageProfile) {
            return JSON.parse(storageProfile)
        }

        return {} as ProfileProps
    })

   useEffect(() => {
       localStorage.setItem('@Github:profile', JSON.stringify(profile))
   }, [profile])

   const signIn = useCallback( async ({ username }) => {
      const response = await api.get<ProfileProps>(`/users/${username}`)
      setProfile(response.data)

   }, [])

   const signOut = useCallback(() => {
      localStorage.removeItem('@Github:profile')

      setProfile({} as ProfileProps)

   }, [])

   return (
       <LoginContext.Provider value={{profile, signOut, signIn}}>
          {children}
       </LoginContext.Provider>
   )
}

export const useProfile = () => {
    const context = useContext(LoginContext)

    return context
}