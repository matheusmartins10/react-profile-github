import React from 'react'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { useHistory } from 'react-router-dom'

import ProfilePic from '../../assets/profile.svg'

import Image from '../../assets/image.svg'

import * as S from './styles'

import { useProfile } from '../../context/LoginContext'

type UserProps = {
    username: string
}

const schema = Yup.object().shape({
    username: Yup.string().required('Username é obrigatório.')
})

const SignIn = () => {

    const history = useHistory()

    const { signIn } = useProfile()

    const { handleSubmit, register, formState: { errors }, setValue } = useForm<UserProps>({
        resolver: yupResolver(schema)
    })

    const onSubmit = async ({ username }: UserProps) => { 
        try {
            await signIn({username})

            history.push('/dashboard')

        }catch(e) {
            window.alert('Error')
        }
    }

    return (
        <S.Container>
            <S.Content>
               <S.ProfilePhoto src={ProfilePic} alt="profile"/>
               <S.Text> Login </S.Text>
               <S.WrapperContent>
                   <form onSubmit={handleSubmit(onSubmit)} >
                     <input placeholder="type..." {...register('username')} onChange={e => setValue('username', e.target.value)} />
                     <button type="submit" >Entrar</button>
                   </form>
               </S.WrapperContent>
            </S.Content>
            <S.Background>
                <S.BackgroundImage src={Image} alt="image" />
            </S.Background>
        </S.Container>
    )
}

export default SignIn
