import { useEffect, useState } from "react"

import styled from "styled-components"

// Komponent
import Navbar from './components/navbar'
import UserForm from './components/user/form'

// Firebase
import { db } from "./db/firebase"
import { collection, onSnapshot } from "firebase/firestore"

export default function User() {

    const [userData, setUserData] = useState([])
    const [fetchLoading, setFetchLoading] = useState("")

    const [toggleForm, setToggleForm] = useState(false);

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

    useEffect(() => {
        getData()
    }, [])

    function DisplayUser() {
        const data = userData.map((i, no) =>
            <div className="card" key={no}>
                <h3>{i.nama}</h3>
                <p className="email">{i.email}</p>
                <p><strong>Role:</strong> <span style={{ color: i.role == "Admin" ? "yellow" : "grey" }}>{i.role}</span></p>
                <p><strong>Status:</strong> <span style={{ color: i.status == "Aktif" ? "lightgreen" : "red" }}>{i.status}</span></p>
                <p><strong>Login Count:</strong> {i.loginCount}</p>
            </div>
        )

        return data
    }

    return (
        <>
            <Navbar></Navbar>
            <Container>
                <Content>
                    <Wrapper>
                        <div className="filter">
                            <input type="text" placeholder="Search..." />
                            <button onClick={() => setToggleForm(!toggleForm)}>Add</button>
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
    }

    .card h3 {
        margin: 0 0 10px 0;
        font-size: 1.5rem;
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