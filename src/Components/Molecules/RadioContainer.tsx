interface RadioContainerProps {
    children: React.ReactNode;
}

const RadioContainer = ({ children }: RadioContainerProps) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '100px', flexWrap: 'wrap', marginBottom: '20px' }}> 
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '10px',
                flexWrap: 'wrap',
            }}> 
            {children}
        </div>
    </div>
    );
};

export default RadioContainer;