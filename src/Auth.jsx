import styled from "styled-components"

export default function Auth() {
    return (
        <>
            <Container>

                <div className="wrapper">
                        <div className="card"></div>
                        <div className="card"></div>
                        <div className="card"></div>
                        <div className="card"></div>
                        <div className="card"></div>
                        <div className="card"></div>
                        <div className="card"></div>
                        <div className="card"></div>
                        <div className="card"></div>
                        <div className="card"></div>
                        <div className="card"></div>
                        <div className="card"></div>
                        <div className="card"></div>
                </div>

            </Container>
        </>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100dvh;
    display: flex;
    justify-content: center;
    align-items: center;

    .wrapper{
        border: 1px solid black;
        width: 50%;
        height: 50%;
        display: flex;
        align-items: center;
        gap: 5px;
        overflow-y: auto;
    }

    .wrapper .card{
        background-color: black;
        width: 100px;
        height: 50px;
        margin: 5px;
        flex-shrink: 0;
    }

    .wrapper .card:nth-child(1){
        background-color: blue;
    }

    .wrapper .card:nth-child(13){
        background-color: yellow;
    }

    .wrapper::-webkit-scrollbar{
        height: 10px;
    }

    .wrapper::-webkit-scrollbar-thumb{
        background-color: green;
        border-radius: 50px;
    }

    .wrapper::-webkit-scrollbar-track{
        display: none;
    }

`