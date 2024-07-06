import { createContext, useContext, useState } from "react";

const UserContext = createContext({
    username: "",
    roomId: "",
    setUsername: () => {},
    setRoomId: () => {}
});

export const useUserContext = () => {
    const context = useContext(UserContext);
    return context;
}


const UserProvider = ({ children }) => {
    const [username, setUsername] = useState("");
    const [roomId, setRoomId] = useState("")


    return <UserContext.Provider value={{username, roomId, setUsername, setRoomId}}>
        {children}
    </UserContext.Provider>
}

export default UserProvider;