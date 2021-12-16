import styled from "styled-components";

const Container = styled.div`
  width: 832px;
  max-width: 100%;

  padding: 0 1rem;

  height: 100%;

  margin: 0 auto;

  > div {
    width: 832px;
    max-width: 95%;

    padding: 0 1rem;

    position: fixed;
    bottom: 5%;
    display: flex;
    justify-content: flex-end;

    z-index: 3;
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
  border-color: #ffffff10;

  transition: all 0.2s;

  color: rgba(255, 255, 255, 0.9);

  &.checked {
    transition: color 0.185s;

    color: var(--white-smooth);
    text-decoration: line-through;

    border-color: var(--shadow);

    background: #00000005;
    backdrop-filter: blur(10px);
    z-index: 1;

    span {
      border-color: transparent;
    }

    svg {
      opacity: 1;
    }
  }

  &:nth-child(3n + 1) {
    border-bottom-color: #90d7ff;
  }

  &:nth-child(3n + 2) {
    border-bottom-color: #c9f9ff;
  }

  &:nth-child(3n + 3) {
    border-bottom-color: #bfd0e0;
  }
`;

const NameContainer = styled.div`
  width: 100%;
  height: 100%;

  gap: 0 10px;
  word-wrap: break-word;

  span {
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

    svg {
      transition: all 0.185s;
      opacity: 0;
    }
  }

  p {
    transition: all 0.185s;
    font: 300 15px var(--font-family);

    padding: 2.5px 30px;

    cursor: default;

    &:hover {
      color: var(--purple);
    }
  }
`;

const Trash = styled.div`
  width: 100%;

  svg {
    cursor: pointer;
    float: right;
    width: 20px;
    height: 20px;

    stroke: transparent;
    fill: var(--white);

    &:hover {
      fill: #ba0000;
    }
  }

  &.checked {
    svg {
      stroke: #ffffff15;
      fill: #ffffff30;
    }
  }
`;

const NewItem = styled.div`
  width: 4rem;
  height: 4rem;

  transition: all 0.2s;

  cursor: pointer;

  border-radius: 10px;

  display: grid;
  place-items: center;

  color: var(--white);
  font: 300 50px var(--font-family);

  margin-right: 10px;

  z-index: 3;
`;

const Modal = styled.div`
  transition: all 0.5s;
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  backdrop-filter: blur(0px);
  z-index: -1;

  overflow: hidden;

  &.active {
    background: #00000010;
    backdrop-filter: blur(6px);
    z-index: 2;
  }
`;

const ModalForm = styled.form`
  transition: all 0.5s;
  width: 35rem;
  max-width: 90%;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 1rem 0;

  background: #414141;
  box-shadow: 0 0 4px 1px #00000010;
  border-radius: 5px;

  position: absolute;
  bottom: 0;
  left: 50%;

  transform: translate(-50%, 50%);

  z-index: -1;
  opacity: 0;

  input {
    width: 100%;
    padding: 5px 10px;

    border: none;
    outline: none;

    font: 300 14px var(--font-family);

    border-bottom: 1px solid var(--white-smooth);
    background: none;

    border-radius: 2px;
    color: rgba(255, 255, 255, 0.9);
  }

  button {
    margin: 0 auto;
    padding: 5px 2rem;

    background: none;
    border: none;
    outline: none;

    box-shadow: 0 0 7px 1px #00000015;
    border: 1px solid #fff;
    border-radius: 5px;

    color: rgba(255, 255, 255, 0.8);

    font: 300 14px var(--font-family);
    text-transform: uppercase;

    cursor: pointer;
  }

  input:hover,
  input:active,
  input:focus {
    border-color: #fff;
  }

  button:hover,
  button:active,
  button:focus {
    box-shadow: 0 0 4px 1px #00000025;
    border-color: #90d7ff;
  }

  &.active {
    transform: translate(-50%, 50%);
    bottom: 50%;
    z-index: 2;
    opacity: 1;
  }
`;

export {
  TodoContainer,
  NameContainer,
  ModalForm,
  Container,
  NewItem,
  Trash,
  Modal,
  Main,
};
