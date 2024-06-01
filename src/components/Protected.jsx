import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'

export default function Protected({children, authenticated = true}) {
    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    const userStatus = useSelector(state => state.user.status)

    useEffect(() => {        
        if(authenticated && userStatus !== authenticated){
            navigate("/login")
        } else if(!authenticated && userStatus !== authenticated){
            navigate("/")
        }
        setLoader(false)
    },[userStatus,navigate,authenticated])

    return loader ? <h1>Loading...</h1> : <>{children}</>
}