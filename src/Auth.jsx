import { useState } from "react"
import styled from "styled-components"

export default function Auth() {

    const [display, setDisplay] = useState("login")

    return (
        <>
            <Container>

                {display === "login" && (<Login>
                    <p onClick={() => setDisplay("register")} >SignUp</p>
                    INI SEMUA HALAMAN LOGIN
                </Login>)}

                {display === "register" && (<Register>
                    <p onClick={() => setDisplay("login")}>SignIn</p>
                    INI SEMUA HALAMAN REGISTER
                </Register>)}

            </Container>
        </>
    )
}

const Container = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    height: 50dvh;
    border: 1px solid black;
`

const Login = styled.div`
    background-color: yellow;
    width: 100%;
    height: 100%;
`

const Register = styled.div`
    background-color: yellow;
    width: 100%;
    height: 100%;
`