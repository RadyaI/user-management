import styled from 'styled-components'
import Navbar from './components/navbar'

export default function Login() {
    return (
        <>
            <Navbar></Navbar>
            <Container>
                <Content>
                    Welcome to login simulation
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