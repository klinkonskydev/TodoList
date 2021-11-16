import styled from "styled-components";

const Container = styled.div`
    transition: all .5s;
    position: fixed;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    backdrop-filter: blur(0px);
    z-index: -1;

    overflow: hidden;

    &.active
    {
        background: #00000010;
        backdrop-filter: blur(6px);
        z-index: 2;
    }
`;

const ModalForm = styled.form`
    transition: all .5s;
    width: 35rem;
    max-width: 90%;
    padding: 1rem;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    gap: 1rem 0;
    
    background: var(--white-smooth);
    box-shadow: 0 0 4px 1px #00000010;
    border-radius: 5px;

    position: absolute;
    bottom: 0;
    left: 50%;

    transform: translate(-50%, 50%);

    z-index: -1;
    opacity: 0;

    input
    {
        width: 100%;
        padding: 5px 10px;

        border: none;
        outline: none;

        font: 300 14px var(--font-family);

        border-bottom:1px solid var(--white-smooth);
        background: none;
        
        border-radius: 2px;
        color: rgba(255, 255, 255, 0.90);
    }

    button
    {
        margin: 0 auto;
        padding: 5px 2rem;

        background: none;
        border: none;
        outline: none;

        box-shadow: 0 0 7px 1px #00000015;
        border: 1px solid #fff;
        border-radius: 5px;

        color: rgba(255, 255, 255, 0.80);

        font: 300 14px var(--font-family);
        text-transform: uppercase;

        cursor: pointer;
    }

    input:hover,
    input:active,
    input:focus
    {
        border-color: #fff;
    }

    button:hover
    {
        box-shadow: 0 0 4px 1px #00000025;
    }

    &.active
    {
        transform: translate(-50%, 50%);
        bottom: 50%;
        z-index: 2;
        opacity: 1;
    }
`;

export { Container, ModalForm };