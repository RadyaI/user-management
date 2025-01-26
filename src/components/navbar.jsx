import { useEffect, useState } from "react"
import { NavLink, useNavigate } from "react-router"
import styled from "styled-components"

export default function User() {

    return (
        <>
            <Menu>
                <NavLink to="/"><button>User</button></NavLink>
                <NavLink to="/statistik"><button>Statistik</button></NavLink>
                <NavLink to="/login"><button>Login</button></NavLink>
            </Menu>
        </>
    )
}



const Menu = styled.div`
background-color: #03001C;
position: fixed;
left: 50%;
transform: translateX(-50%);
padding-top: 25px;
width: 100%;
height: auto;
display: flex;
justify-content: space-evenly;

button {
    cursor: pointer;
    background-color: #B6EADA;
    color: #010038;
    font-weight: bold;
    border: none;
    padding: 10px 20px;
    border-radius: 7px;
    font-size: 17px;
    transition: all 200ms;
    box-shadow: 2px 2px 0 1px red;
}

button:hover{
    box-shadow: none;
    transform: translateY(2px);
}
`