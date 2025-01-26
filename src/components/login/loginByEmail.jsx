import { useState } from "react"
import styled from "styled-components"

export default function EmailLogin({ toggleForm }) {

    const [btnText, setBtnText] = useState("Login")
    const [formData, setFormData] = useState({})

    async function Login() {
        try {
            if (!formData.email || formData.email === '') {
                alert("Email tidak boleh kosong")
            } else if (!formData.password || formData.password === '') {
                alert("Password tidak boleh kosong")
            } else {
                alert(JSON.stringify(formData))
            }
            // toggleForm(false)
        } catch (error) {
            console.log(error)
        }
    }

    function handleForm(e) {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    return (
        <>
            <Container>
                <button className="btn-submit" onClick={() => toggleForm(false)}>X</button>
                <Wrapper>
                    <div className="input-group">
                        <label className="label">Email/Username</label>
                        <input type="text" name="email" onChange={(e) => handleForm(e)} className="input" autoComplete="off" placeholder="Masukkan username atau email..." />
                    </div>
                    <div className="input-group">
                        <label className="label">Password</label>
                        <input type="password" name="password" onChange={(e) => handleForm(e)} className="input" placeholder="Masukkan password..." />
                    </div>
                    <button className="btn-submit" onClick={() => Login()}>{btnText}</button>
                </Wrapper>
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

const Wrapper = styled.div`
    margin: 30px 0;
    width: 100%;
    height: fit-content;

    .input-group{
        color: white;
        display: flex;
        flex-direction: column;
        margin: 30px 0;
    }

    .input-group .label{
        font-weight: bold;
    }

    .input-group .input{
        border: none;
        border-radius: 7px;
        outline: none;
        width: 90%;
        height: 40px;
        padding: 0 10px;
        font-size: 15px;
        margin-top: 10px;
    }

    .btn-submit{
        border: none;
        border-radius: 7px;
        margin-bottom: 20px;
        cursor: pointer;
        padding: 10px 25px;
        font-weight: bold;
        background-color: white;
        border: 2px solid red;
        transition: all 0.5s;
    }

    .btn-submit:hover{
        transform: scale(0.9);
    }
`