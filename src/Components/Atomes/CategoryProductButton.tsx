import { Button } from 'react-bootstrap';

interface CategoryProductButtonProps {
    name: string;
    onClick: () => void;
    backgroundColor: string;
    key: number;
}

export function CategoryProductButton({name, onClick, backgroundColor, key}: CategoryProductButtonProps){
  return (
    <Button
    key= {key}
    className='buttonCat'
    variant="outlined"
    style={{
      color: 'black',
      borderColor: 'black',
      backgroundColor: backgroundColor
    }}
        onClick={onClick}
    >
    {name}
  </Button>
  );
}
