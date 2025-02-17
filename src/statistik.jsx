import { useEffect, useState } from "react"

// Komponent
import styled from "styled-components"
import Navbar from './components/navbar'
import TemplatePagination from './components/statistik/templatePagination'

// Firebase
import { db } from "./db/firebase"
import { collection, onSnapshot, query, where } from "firebase/firestore"

export default function Statistik() {

    const [userActive, setUserActive] = useState(0)
    const [totalUserActive, setTotalUserActive] = useState(0)
    const [adminActive, setAdminActive] = useState(0)

    const [userLogin, setUserLogin] = useState([])

    function olehData(data) {
        try {
            setUserActive(data.filter((i) => i.status === "Aktif" && i.role === "User").length)
            setTotalUserActive(data.filter((i) => i.status === "Aktif").length)
            setAdminActive(data.filter((i) => i.status === "Aktif" && i.role === "Admin").length)
            setUserLogin(data.filter((i) => i.isLoggedIn === true))
        } catch (error) {
            console.log(error)
        }
    }

    function getUser() {
        try {
            const unsubscribe = onSnapshot(query(collection(db, "management"), where("status", "==", "Aktif")), (snapshot) => {
                let temp = []
                snapshot.forEach((data) => {
                    temp.push({ ...data.data(), id: data.id })
                })
                olehData(temp)
            })
            return unsubscribe
        } catch (error) {
            console.log(error)
        }

    }

    useEffect(() => {
        const unsubscribe = getUser()

        return () => {
            unsubscribe()
        }

    }, [])

    return (
        <>
            <Navbar />
            <Container>
                <Content>
                    <UserCount>
                        <div className="card">
                            <p>{userActive}</p>
                            <p>User Active</p>
                        </div>
                        <div className="card">
                            <p>{totalUserActive}</p>
                            <p>Total User Active</p>
                        </div>
                        <div className="card">
                            <p>{adminActive}</p>
                            <p><span style={{ color: "lightgreen" }}>Admin</span> Active</p>
                        </div>
                    </UserCount>
                    <TemplatePagination getUser={userLogin}></TemplatePagination>
                </Content>
            </Container>
        </>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100dvh;
    overflow-y: auto;
    background-color: #03001C;

    &::-webkit-scrollbar{
        width: 10px;
    }

    &::-webkit-scrollbar-track{
        display: none;
    }

    &::-webkit-scrollbar-thumb{
        border-radius: 10px;
        background-color: lightblue;
    }
`

const Content = styled.div`
    margin-top: 100px;
    width: 100%;
    height: 100%;
`

const UserCount = styled.div`
    width: 90%;
    margin: 0 auto;
    height: auto;
    display: flex;
    justify-content: center;
    gap: 100px;

    .card{
        border: 1px solid white;
        color: white;
        padding: 20px;
        width: 18%;
        height: 120px;
        border-radius: 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 10px;
    }

    .card p:nth-child(1){
        font-size: 60px;
    }
    .card p:nth-child(2){
        font-size: 20px;
    }

    @media only screen and (max-width: 700px){
        flex-direction: column;
        align-items: center;
        gap: 50px;

        .card{
            width: 70%;
        }
    }
`