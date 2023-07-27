import { useState, createContext, ReactNode } from 'react';

interface UserContextType {
    name: string;
    setName: React.Dispatch<React.SetStateAction<string>>;
}

export const UserContext = createContext<UserContextType>({
    name: '',
    setName: () => { }
});

interface UserProviderProps {
    children: ReactNode;
}

function UserProvider({ children }: UserProviderProps) {
    const [name, setName] = useState('');

    return (
        <UserContext.Provider value={{ name, setName }}>
            {children}
        </UserContext.Provider>
    );
}

export default UserProvider;