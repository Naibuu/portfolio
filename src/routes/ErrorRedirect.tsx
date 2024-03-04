import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const ErrorRedirect = () => {
    const navigate = useNavigate()

    useEffect(() => {
        navigate('/')
    }, [])

    return null
}
