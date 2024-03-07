import React from 'react';

interface DetailContainerProps {
    children: React.ReactNode;
}

const DetailContainer = ({ children }: DetailContainerProps) => {
    return (
        <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh', overflow: 'adivuto' }}>
            {children}
        </div>
    );
};

export default DetailContainer;
