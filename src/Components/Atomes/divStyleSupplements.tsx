
interface DivStyleSupplementsProps {
    children: React.ReactNode;
}

export function DivStyleSupplements({children}: DivStyleSupplementsProps){
  return (
    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
        {children}
    </div>

  );
}
