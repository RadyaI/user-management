import styled from "styled-components"

import Navbar from './components/navbar'

export default function Statistik() {

    return (
        <>
            <Navbar></Navbar>
            <Container>
                <Content>
                    statistik
                </Content>
            </Container>
        </>
    )
}

const Container = styled.div`
    background-color: #03001C;
    color: white;
    width: 100%;
    height: 100vh;
`

const Content = styled.div`
    border: 1px solid white;
    margin: 0 auto;
    width: 90%;
    height: 70%;
`