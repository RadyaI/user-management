import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'

// Component
import styled from 'styled-components'
import Navbar from './components/navbar'

export default function Login() {

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        setIsLoggedIn(Cookies.get("isLoggedIn") === "true")
    }, [])

    return (
        <>
            <Navbar></Navbar>
            <Container>
                <Content>
                    {isLoggedIn && (<Status style={{color: "lightgreen"}}>Anda sedang login</Status>)}
                    {!isLoggedIn && (<Status style={{color: "red"}}>Anda sedang Logout</Status>)}
                </Content>
            </Container>
        </>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100dvh;
    background-color: #03001C;
    overflow-y: auto;

    &::-webkit-scrollbar{
        width: 10px;
    }

    &::-webkit-scrollbar-track{
        display: none;
    }

    &::-webkit-scrollbar-thumb{
        border-radius: 10px;
        background-color: lightblue;
    }
`

const Content = styled.div`
    border: 1px solid white;
    color: white;
    width: 90%;
    height: 200px;
    margin: 0 auto;
    margin-top: 100px;    
`

const Status = styled.div`
    color: white;
    width: fit-content;
    padding: 10px 20px;
    font-size: 20px;
    font-weight: bold;
    margin: 0 auto;
`