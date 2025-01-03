import styled from "styled-components"

export default function User() {

    return (
        <>
                <Menu>
                    <button>User</button>
                    <button>Food</button>
                </Menu>
        </>
    )
}



const Menu = styled.div`
border: 1px solid white;
position: fixed;
left: 50%;
transform: translateX(-50%);
margin-top: 30px;
padding-top: 50px;
width: 50%;
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
    transition: all 500ms;
}

button:hover{
    transform: scale(1.1);
}
`