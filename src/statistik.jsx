import styled from "styled-components"

// Komponent
import Navbar from './components/navbar'

export default function Statistik() {
    return (
        <>
        <Navbar/ >
            <Container>
                <Content>
                    {/* Disini konten yang panjang blablabla... */}
                </Content>
            </Container>
        </>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100dvh;
    overflow: auto;
    background-color: #03001C;
`

const Content = styled.div`
    /* style */
`