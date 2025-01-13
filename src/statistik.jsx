import styled from "styled-components"

import Navbar from './components/navbar'

export default function Statistik() {

    return (
        <>
            <Navbar></Navbar>
            <Container>
                <Content>
                    Statistik
                </Content>
            </Container>
        </>
    )
}

const Container = styled.div`
    background-color: #03001C;
    color: white;
    padding-top: 1px;
    width: 100%;
    height: 100vh;
`

const Content = styled.div`
    border: 1px solid white;
    margin: 0 auto;
    margin-top: 70px;
    width: 90%;
    height: 70%;
`