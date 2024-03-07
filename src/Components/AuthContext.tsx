import React, { createContext, useState, useContext } from 'react';

type AuthContextType = {
    userId: number | null;
    setUserId: (userId: number | null) => void;
};

// Création et export du contexte
export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: React.FC = ({ children }) => {
    const [userId, setUserId] = useState<number | null>(null);

    return (
        <AuthContext.Provider value={{ userId, setUserId }}>
            {children}
        </AuthContext.Provider>
    );
};

// Export du hook personnalisé pour une utilisation plus facile
export const useAuth = () => useContext(AuthContext);
