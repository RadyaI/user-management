import styled from 'styled-components'
import Navbar from './components/navbar'

export default function Login() {
    return (
        <>
            <Navbar></Navbar>
            <Container></Container>
        </>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100dvh;
    background-color: #03001C;
`