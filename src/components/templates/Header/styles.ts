import styled from "styled-components";

const HeaderDiv = styled.header`
    width: 832px;
    max-width: 100%;
    height: 3rem;

    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-around;
    border-bottom: 1px solid var(--white-smooth);

    a
    {
        width: 5.8rem;
        max-width: 100%;

        color: var(--dark-gray);
        font: 400 16px var(--font-family);
        
        text-align: center;

        color: rgba(255, 255, 255, 0.80);

        transition: all .285s;

        &:hover
        {
            color: var(--purple);
        }
    }

    span
    {
        width: 1px;
        height: 50%;

        background-color: var(--dark-gray);
    }

    &.all
    {
        a:nth-child(1)
        {
            color: var(--white);
            transform: scale(1.3);
        }
    }
    &.today
    {
        a:nth-child(2)
        {
            color: var(--white);
            transform: scale(1.3);
        }
    }
    &.conclued
    {
        a:nth-child(3)
        {
            color: var(--white);
            transform: scale(1.5);
        }
    }
`;

export { HeaderDiv };