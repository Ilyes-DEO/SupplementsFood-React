import { Button } from 'react-bootstrap';

interface AllProductButtonProps {
    title: string;
    onClick: () => void;
    backgroundColor: string;
}

export function AllProductButton({title, onClick, backgroundColor}: AllProductButtonProps){
  return (
    <Button
      key={0}
      className='buttonCat'
      variant="outlined"
      style={{
        color: 'black',
        borderColor: 'black',
        backgroundColor: backgroundColor
    }}
        onClick={onClick}
    >
      {title}
    </Button>
  );
}
