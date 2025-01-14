import { useState } from "react"

import styled, { keyframes } from "styled-components"
import swal from "sweetalert"

// Firebase
import { db } from "../../db/firebase"
import { addDoc, collection, Timestamp } from "firebase/firestore"

export default function userForm() {

    const [formData, setFormData] = useState([])

    function handleForm(e) {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value
        }))
    }

    async function submit() {
        if (!formData.nama || !formData.email || !formData.password || !formData.role) {
            console.log("Lengkapi semua input")
        } else {
            await swal({
                icon: 'warning',
                title: 'Data Sudah Benar?',
                dangerMode: false,
                buttons: ['Belum', 'Sudah']
            }).then(
                (next) => {
                    if (next) {
                        try {
                            const sendData = {
                                ...formData,
                                isLoggedIn: false,
                                status: "Aktif",
                                tanggal_registrasi: new Date().toLocaleDateString('en-ca'),
                                time: Timestamp.now().toMillis(),
                                loginCount: 0
                            }
                            addDoc(collection(db, "management"), sendData)
                            swal({
                                icon: "success",
                                title: "Berhasil Tambah Data",
                                button: false,
                                timer: 500
                            })
                            setFormData([])
                        } catch (error) {
                            console.log(error)
                        }
                    }
                }
            )
        }
    }

    return (
        <>
            <Wrapper>
                <div className="input-group">
                    <label className="label">Nama </label>
                    <input type="text" className="input" name="nama" onChange={(e) => handleForm(e)} autoComplete="off" placeholder="Masukkan Nama..." />
                </div>
                <div className="input-group">
                    <label className="label">Email </label>
                    <input type="text" className="input" name="email" onChange={(e) => handleForm(e)} autoComplete="off" placeholder="Masukkan Email..." />
                </div>
                <div className="input-group">
                    <label className="label">Role </label>
                    <select className="input" name="role" onChange={(e) => handleForm(e)} style={{ width: "52%" }}>
                        <option value="-">-</option>
                        <option value="Admin">Admin</option>
                        <option value="User">User</option>
                    </select>
                </div>
                <div className="input-group">
                    <label className="label">Password </label>
                    <input type="password" className="input" name="password" onChange={(e) => handleForm(e)} placeholder="Masukkan Password..." />
                </div>

                <button className="btn-submit" onClick={submit}>ADD</button>
            </Wrapper>
        </>
    )
}

const appear = keyframes`
    from {
        height: 0px;
    }
    to {
        height: 400px;
    }
`

const Wrapper = styled.div`
    animation: ${appear} 0.5s;
    margin: 30px 0;
    width: 100%;
    height: 400px;
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
        width: 50%;
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