import styled from 'styled-components';

export const Container = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 50vw;
    height: 80vh;
    padding: 0px 30px;
    box-shadow: 2px 2px 4px #000000ad;
    border-radius: 10px;
    margin-top: 30px
`;

export const BoxButtons = styled.div `
    display: flex;
`;

export const ButtonSurprise = styled.button `
    color: #49A6EA;
    font-size: 13px;
    font-weight: bold;
    background-color: transparent;
    padding: 6px;
    border: solid 2px #49A6EA;
    border-radius: 8px;
    cursor: pointer;

    &:hover {
        color: #102B42;
        border-color: #102B42;
        background-color: #2E6A96;
    }
`;