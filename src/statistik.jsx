import styled from "styled-components"

// Component
import Navbar from './components/navbar'

export default function Statistik() {
    return (
        <>
            <Navbar></Navbar>
            <Container>
                <Content>
                    <div className="wrapper">
                        {/* Isi konten disini */}
                    </div>
                </Content>
            </Container>
        </>
    )
}

const Container = styled.div`
    background-color: #03001C;
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
`;

const Content = styled.div`
    border: 1px solid white;
    margin: 0 auto;
    width: 90%;
    min-height: 100vh;

    display: flex;
    flex-direction: column;

    .wrapper {
        border: 1px solid lightgreen;
        width: 100%;
        min-height: 85vh;
    }
`
