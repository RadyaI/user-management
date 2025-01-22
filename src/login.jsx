import { useEffect, useState } from 'react'
import Cookies from 'js-cookie'

// Component
import styled from 'styled-components'
import Navbar from './components/navbar'

// Firebase
import { db, auth } from "./db/firebase"
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { addDoc, collection, doc, getDocs, query, Timestamp, updateDoc, where } from 'firebase/firestore'

export default function Login() {

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [googleLoading, setGoogleLoading] = useState("Google")

    useEffect(() => {
        setIsLoggedIn(Cookies.get("isLoggedIn") === "true")
    }, [])

    async function googleLogin() {
        try {
            const provider = new GoogleAuthProvider()
            const user = await signInWithPopup(auth, provider)
            setGoogleLoading("Loading...")
            let id;
            let newUser = {
                id: user.user.uid,
                nama: user.user.displayName,
                email: user.user.email,
                role: "User",
                status: "Aktif",
                isLoggedIn: true,
                tanggal_registrasi: new Date().toLocaleDateString("en-ca"),
                time: Timestamp.now().toMillis(),
                loginCount: 0
            }

            const checkEmail = await getDocs(query(collection(db, "management"), where("email", "==", user.user.email)))
            checkEmail.forEach((data) => {
                id = data.id
            })

            if (id) {
                await updateDoc(doc(db, "management", id), {
                    isLoggedIn: true
                })
            } else {
                await addDoc(collection(db, "management"), newUser)
            }
            Cookies.set("isLoggedIn", true)
            setIsLoggedIn(true)
            setGoogleLoading("Google")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <Navbar></Navbar>
            <Container>
                <Content>
                    {isLoggedIn && (<Status style={{ color: "lightgreen" }}>Anda sedang login</Status>)}
                    {!isLoggedIn && (<Status style={{ color: "red" }}>Anda sedang Logout</Status>)}
                    <LoginOption>
                        <button onClick={() => googleLogin()}>{googleLoading}</button>
                        <button>Email/Password</button>
                    </LoginOption>
                </Content>
            </Container>
        </>
    )
}

const Container = styled.div`
    width: 100%;
    height: 100dvh;
    background-color: #03001C;
    overflow-y: auto;

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
    border: 1px solid white;
    color: white;
    width: 90%;
    height: 200px;
    margin: 0 auto;
    margin-top: 100px;    
`

const Status = styled.div`
    color: white;
    width: fit-content;
    padding: 10px 20px;
    font-size: 20px;
    font-weight: bold;
    margin: 0 auto;
`

const LoginOption = styled.div`
    margin: 0 auto;
    margin-top: 20px;
    width: 80%;
    display: flex;
    justify-content: center;
    gap: 30px;

    button{
        border: none;
        padding: 10px 20px;
        border-radius: 7px;
        cursor: pointer;
        font-size: 17px;
        background-color: white;
        font-weight: bold;
        transition: all 200ms;
    }

    button:hover{
        transform: scale(1.1);
    }
`