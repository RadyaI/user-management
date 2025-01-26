import { useState } from "react"
import styled from "styled-components"

export default function EmailLogin({ toggleForm }) {

    return (
        <>
            <Container>
                <button className="btn-submit" onClick={() => toggleForm(false)}>X</button>


            </Container>
        </>
    )
}

const Container = styled.div`
    position: absolute;
    z-index: 9999;
    background-color: #03001C;
    border: 2px solid red;
    padding: 30px;
    border-radius: 10px;
    
    width: 50%;
    height: 50dvh;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    overflow-y: auto;
    
    &::-webkit-scrollbar{
        width: 10px;
    }

    &::-webkit-scrollbar-track{
        display: none;
    }

    &::-webkit-scrollbar-thumb{
        border-radius: 7px;
        background-color: white;
        cursor: crosshair;
    }

    button{
        margin-right: 0;
        border: none;
        border-radius: 7px;
        cursor: pointer;
        padding: 10px 25px;
        font-weight: bold;
        background-color: white;
        border: 2px solid red;
        transition: all 0.5s;
    }
`