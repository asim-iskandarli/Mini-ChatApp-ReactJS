import { createContext, useContext } from "react";
import io from 'socket.io-client';


const SocketContext = createContext(undefined);

export const useSocketContext = () => {
    const context = useContext(SocketContext);
    return context;
}

const SocketProvider = ({ children }) => {
    const socket = io.connect(process.env.REACT_APP_SERVER_URL);

    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    )
}

export default SocketProvider;