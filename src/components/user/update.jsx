import { useState } from "react"
import styled from "styled-components"

export default function UpdateUser({toggleForm}) {

    const [formData, setFormData] = useState([])

    return (
        <>
            <Container>
                <button className="btn-submit" onClick={() => toggleForm(false)}>X</button>
                <Wrapper>
                    <div className="input-group">
                        <label className="label">Nama </label>
                        <input type="text" className="input" name="nama" value={formData.nama} onChange={(e) => handleForm(e)} autoComplete="off" placeholder="Masukkan Nama..." />
                    </div>
                    <div className="input-group">
                        <label className="label">Email </label>
                        <input type="text" className="input" name="email" value={formData.email} onChange={(e) => handleForm(e)} autoComplete="off" placeholder="Masukkan Email..." />
                    </div>
                    <div className="input-group">
                        <label className="label">Role </label>
                        <select className="input" name="role" onChange={(e) => handleForm(e)} style={{ width: "93%" }}>
                            <option value="-">-</option>
                            <option value="Admin">Admin</option>
                            <option value="User">User</option>
                        </select>
                    </div>
                    <div className="input-group">
                        <label className="label">Password </label>
                        <input type="password" className="input" value={formData.password} name="password" onChange={(e) => handleForm(e)} placeholder="Masukkan Password..." />
                    </div>

                    <button className="btn-submit">ADD</button>
                </Wrapper>
            </Container>
        </>
    )
}

const Container = styled.div`
    position: absolute;
    background-color: #3f359f;
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
    height: 400px;

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