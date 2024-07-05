import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        font-family: 'Roboto',sans-serif;
    }
    *, *::after, *::before{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`;

export const Input = styled.input`
    width: 100%;
    height: 40px;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 10px;
    font-size: 16px;
`;

export const Label = styled.label`
    color: #292929;
    font-weight: 500;
    opacity: 0.7;
`;

export const Button = styled.button`
    background-color: #33adff;
    border: none;
    height: 40px;
    color: #ffffff;
    font-size: 18px;
    cursor: pointer;
    border-radius: 8px;
    transition: ease 0.3s all;

    &:hover {
        background-color: #0d9eff;
    }
`;

export const ErrorMessage = styled.h4`
    color: #f2380d;
    margin-top: 1rem;
`;

export default GlobalStyle;