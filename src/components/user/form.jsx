import styled, { keyframes } from "styled-components"


export default function userForm() {
    return (
        <>
            <Wrapper></Wrapper>
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
    border: 1px solid white;
    animation: ${appear} 0.5s;
    margin: 30px 0;
    width: 100%;
    height: 400px;
`