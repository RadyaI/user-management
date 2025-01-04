import styled from "styled-components"

import Navbar from './components/navbar'
import userData from "./db/user.json"

export default function User() {

    return (
        <>
            <Navbar></Navbar>
            <Container>
                <Content></Content>
            </Container>
        </>
    )
}

const Container = styled.div`
    background-color: #03001C;
    width: 100%;
    height: 100vh; 
`

const Content = styled.div`
    border: 1px solid white;
    margin: 0 auto;
    width: 90%;
    height: 70%;
`