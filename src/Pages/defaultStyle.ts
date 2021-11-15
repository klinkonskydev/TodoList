import styled from "styled-components";

const Container = styled.div`
    width: 832px;
    max-width: 100%;

    padding: 0 1rem;

    height: 100%;

    margin: 0 auto;

    > div
    {
        width: 832px;
        max-width: 100%;

        padding: 0 1rem;
        
        position: absolute;
        bottom: 5%;
        display: flex;
        justify-content: flex-end;
    }
`;

const Main = styled.main`
    width: 100%;

    padding: 1rem 0;
`;

const TodoContainer = styled.section`
    width: 100%;
    min-height: 3rem;
    height: auto;

    border-radius: 1rem;

    margin: 0 0 1.6rem;
    padding: 1rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    border: 1px solid transparent;
    border-color: #FFFFFF10;

    transition: all 0.185s;

    
    color: rgba(255, 255, 255, 0.90);

    &.checked
    {
        transition: color .185s;

        color: var(--white-smooth);
        text-decoration: line-through;

        border-color: var(--shadow);
        
        background: #00000005;
        backdrop-filter: blur(10px);
        z-index: 1;

        span
        {
            border-color: transparent;
        }
      
        svg
        {
            opacity: 1;
        }
        
    }
`;

const NameContainer = styled.div`
    width: 100%;
    height: 100%;

    gap: 0 10px;
    word-wrap: break-word;

    span
    {
        width: 20px;
        height: 20px;

        float: left;
        margin: 2px 10px 2px 0;

        border: 1px solid var(--white-smooth);
        border-radius: 50%;

        display: grid;
        place-items: center;
        transition: all 0.185s;

        cursor: pointer;

        svg
        {
            transition: all .185s;
            opacity: 0;
        }
    }

    p
    {
        transition: all .185s;
        font: 300 15px var(--font-family);

        padding: 2.5px 30px;

        cursor: default;
    }
`;

const Trash = styled.div`
    width: 100%;

    svg
    {
        cursor: pointer;
        float: right;
        width: 20px;
        height: 20px;

        stroke: var(--white-smooth);
        fill: var(--white);

        &:hover
        {
            stroke: transparent;
            fill: red;
        }
    }

    &.checked
    {
        svg
        {
            stroke: #ffffff15;
            fill: #ffffff30;
        }
    }
`;

const NewItem = styled.div`
    width: 5rem;
    height: 5rem;

    transition: all .185s;

    cursor: pointer;

    border-radius: 10px;

    display: grid;
    place-items: center;

    color: var(--white);
    font: 300 50px var(--font-family);

    margin-right: 10px;

    z-index: 3;
`;

export { 
    Container,
    Main,
    TodoContainer,
    NameContainer,
    Trash,
    NewItem 
}