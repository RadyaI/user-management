import { useEffect, useMemo, useState } from "react"

import styled from "styled-components"

// Komponent
import Navbar from './components/navbar'
import UserForm from './components/user/form'
import UpdateUser from "./components/user/update"

// Firebase
import { db } from "./db/firebase"
import { collection, deleteDoc, doc, onSnapshot } from "firebase/firestore"

export default function User() {

    const [search, setSearch] = useState("");
    const [userData, setUserData] = useState([])
    const [updateId, setUpdateId] = useState(0)
    const [fetchLoading, setFetchLoading] = useState("")

    const [toggleForm, setToggleForm] = useState(false);
    const [toggleUpdateForm, setToggleUpdateForm] = useState(false)
    const [btnText, setBtnText] = useState("ADD")

    function getData() {
        try {
            setFetchLoading("Loading...")
            onSnapshot(collection(db, "management"), (snapshot) => {
                const temp = []
                snapshot.forEach((data) => {
                    temp.push({ ...data.data(), id: data.id })
                })
                setUserData(temp)
                setFetchLoading("")
            })
        } catch (error) {
            console.log(error)
        }
    }

    async function deleteData(id) {
        try {
            const alert = await swal({
                icon: 'warning',
                title: "Yakin mau dihapus?",
                buttons: ["Engga", "Iya"],
                dangerMode: true
            })

            if (alert) {
                const target = doc(db, "management", id)
                deleteDoc(target)
                swal({
                    icon: 'success',
                    title: "Berhasil hapus data",
                    button: false,
                    timer: 300
                })
            }

        } catch (error) {
            console.log(error)
        }
    }

    function handleToggleForm() {
        setToggleForm(!toggleForm)
        setBtnText(toggleForm == true ? "ADD" : "CLOSE")
    }

    function handleUpdateForm(data, id) {
        setUpdateId(id)
        setToggleUpdateForm(data)
    }

    useEffect(() => {
        getData()
    }, [])

    function DisplayUser() {
        let userSearch = userData

        userSearch = useMemo(() => {
            if (search !== "") {
                return userSearch.filter((e) => e.nama.toLowerCase().toString().includes(search.toLowerCase()))
            } else {
                return userData
            }
        }, [search, userData])

        const data = userSearch.map((i) =>
            <div className="card" key={i.id}>
                <h3>{i.nama}</h3>
                <p className="email">{i.email}</p>
                <p><strong>Role:</strong> <span style={{ color: i.role == "Admin" ? "yellow" : "grey" }}>{i.role}</span></p>
                <p><strong>Status:</strong> <span style={{ color: i.status == "Aktif" ? "lightgreen" : "red" }}>{i.status}</span></p>
                <p><strong>Login Count:</strong> {i.loginCount}</p>
                <p><small><span style={{ color: "lightblue" }} onClick={() => handleUpdateForm(true, i.id)}>EDIT</span> | <span style={{ color: "red" }} onClick={() => deleteData(i.id)}>DELETE</span></small></p>
            </div>
        )

        return data
    }

    return (
        <>
            <Navbar></Navbar>
            {toggleUpdateForm && (<UpdateUser toggleForm={handleUpdateForm} getId={updateId}></UpdateUser >)}
            <Container>
                <Content>
                    <Wrapper>
                        <div className="filter">
                            <input type="text" placeholder="Search..." onChange={(e) => setSearch(e.target.value)} />
                            <button onClick={() => handleToggleForm()}>{btnText}</button>
                        </div>
                        {toggleForm && (<UserForm></UserForm>)}
                        <div className="card-wrap">
                            <p style={{ color: "white" }}>{fetchLoading}</p>
                            <DisplayUser></DisplayUser>
                        </div>
                    </Wrapper>
                </Content>
            </Container>
        </>
    )
}

const Container = styled.div`
    background-color: #03001C;
    width: 100%;
    height: 100vh; 
`

const Content = styled.div`
    overflow-y: auto;
    padding-top: 150px;
    margin: 0 auto;
    width: 90%;
    height: 70%;
    display: flex;
    justify-content: center;
    align-items: center;

    &::-webkit-scrollbar{
        display: none;
    }

`

const Wrapper = styled.div`
    width: 90%;
    height: 90%;

    .filter{
        width: 100%;
        height: 20%;
        display: flex;
        justify-content: center;
        gap: 20px;
        align-items: center;

        input{
            border: none;
            outline: none;
            padding: 5px 10px;
            height: 30px;
            width: 40%;
            border-radius: 6px;
            font-size: 16px;
        }

        button{
            cursor: pointer;
            background-color: #B6EADA;
            color: #010038;
            font-weight: bold;
            border: none;
            padding: 10px 20px;
            border-radius: 7px;
            font-size: 17px;
            transition: all 200ms;
        }
    }

    .card-wrap{
        width: 100%;
        height: 85%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-wrap: wrap;
        overflow: auto;
        transition: all 0.5s;
    }

    .card-wrap::-webkit-scrollbar{
        width: 10px;
    }

    .card-wrap::-webkit-scrollbar-track{
        display: none;
    }

    .card-wrap::-webkit-scrollbar-thumb{
        border-radius: 7px;
        background-color: white;
        cursor: crosshair;
    }

    .card {
        background-color: #2c3e50;
        margin-right: 20px;
        margin-bottom: 20px;
        color: white;
        width: 260px;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
        font-family: 'Arial', sans-serif;
        cursor: pointer;
    }
    

    .card h3 {
        margin: 0 0 10px 0;
        font-size: 1.5rem;
        width: 100%;
        height: 30px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .card .email {
        margin-bottom: 10px;
        color: #ecf0f1;
        font-size: 0.9rem;
        font-style: italic;
    }

    .card p {
        margin: 5px 0;
    }

    .card p strong {
        color: #1abc9c;
    }


    @media only screen and (max-width: 700px){
        width: 100%;
        height: 100%;

        .card{
            margin: 0 auto;
            margin-bottom: 20px;
        }
    }
`