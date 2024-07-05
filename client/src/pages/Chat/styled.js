import styled from 'styled-components';
import { Button } from '../../globalStyles';

export const ChatPage = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const ChatBox = styled.div`
    width: 50%;
    background-color: #f5f5f5;
    padding: 5px;
    border-radius: 5px;

    @media only screen and (max-width: 950px) {
        width: 65%;
    }

    @media only screen and (max-width: 550px) {
        width: 90%;
    }
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    border-bottom: 1px solid #ddd;
`;

export const UsersInfo = styled.p`
    padding: 10px;
    font-weight: 500;
`;
export const BackButton = styled.button`
    padding: 10px;
    border: 1px solid #d43434;
    color: #d43434;
    cursor: pointer;
`;


export const MessagesBox = styled.div`
    width: 100%;
    height: 400px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    overflow-y: scroll;
    padding: 5px;
`;

export const Message = styled.div`
    width: 50%;
    background-color: ${({ $owner }) => ($owner ? '#44bdf5' : '#bebebe')};
    padding: 8px;
    align-self: ${({ $owner }) => ($owner ? 'flex-end' : 'flex-start')};
    color: #fff;
    border-radius: ${({ $owner }) => ($owner ? '15px 15px 0 15px' : '15px 15px 15px 0')};
`;

export const MessageDate = styled.p`
    font-size: 12px;
    text-align: end;
`;

export const Bottom = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    margin-top: 10px;
`;

export const SendButton = styled(Button)`
    width: 80px;
    height: 40px !important;
    font-size: 16px;
`;