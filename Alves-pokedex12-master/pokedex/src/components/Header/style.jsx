import styled from "styled-components";

export const Div = styled.div`
display: flex;
position: relative;
width: 100vw;
height: 160px;
width: 100vw;
max-width: 100%;
overflow-x: hidden;
justify-content: center;
align-items: center;
img{
    position: absolute;
    cursor: pointer;
    @keyframes flying {
        0%, 100% {
            transform: translateY(0)
        }
        50% {
            transform: translateY(15px);
        }
    }
    animation: flying infinite 3s ease-in-out;
}
button{
    margin: 0 30px 0 auto;
    width: 267px;
    height: 64px;
    background-color: #33A4F5;
    border-radius: 8px;
    border: none;
    color: white;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    box-shadow: 3px 3px 3px 2px gray;
    :hover{
        background-color: #e11f1f;
        border: 2px solid white;
        text-decoration: underline;
        cursor: pointer;
        transition: 0.2s;
    }
}
@media (max-width: 800px) {
    flex-direction: column;
    height: fit-content;
    img{
        position: static;
        margin: 20px 0 20px 0;
    }
    button{
        margin: 10px 0 20px 0;
        width: 250px;
        height: 60px;
        :active{
        background-color: #e11f1f;
        border: 2px solid white;
        text-decoration: underline;
        transition: 0.2s;
        }
    }
}
`

