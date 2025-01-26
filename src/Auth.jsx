import { useEffect, useState } from "react"
import styled from "styled-components"

import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

export default function Auth() {

    // const [display, setDisplay] = useState("login")
    useEffect(() => {
        new Swiper('.swiper', {
            // Optional parameters
            direction: 'horizontal',
            loop: true,

            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
            },

            // Navigation arrows
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },

            // And if we need scrollbar
            // scrollbar: {
            //     el: '.swiper-scrollbar',
            // },
        });
    }, [])

    return (
        <>
            <div className="swiper" style={{ width: "600px", height: "300px" }}>
                <div className="swiper-wrapper">
                    <div className="swiper-slide">Slide 1</div>
                    <div className="swiper-slide">Slide 2</div>
                    <div className="swiper-slide">Slide 3</div>
                    ...
                </div>
                <div className="swiper-pagination"></div>

                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
            </div>
        </>
    )
}

const Container = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    height: 50dvh;
    border: 1px solid black;
`

const Login = styled.div`
    background-color: yellow;
    width: 100%;
    height: 100%;
`

const Register = styled.div`
    background-color: yellow;
    width: 100%;
    height: 100%;
`