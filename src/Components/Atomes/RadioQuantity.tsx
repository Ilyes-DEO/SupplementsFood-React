import { useState } from 'react';
import { Quantity } from '../../Services/Data/SupplementInterfaces';

interface RadioQuantityProps {
    quantities: Quantity[];
    onChange: (selectedQuantity: string) => void; 
    selectedQuantity: string; 
}

const radioLabelStyle = {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    padding: '10px 20px',
    borderRadius: '20px',
    margin: '5px',
    backgroundColor: 'white',
    transition: 'background-color 0.3s ease',
};

const selectedRadioStyle = {
    backgroundColor: '#007bff',
    color: 'white',
    borderColor: '#007bff',
};

const RadioQuantity = ({ quantities, onChange, selectedQuantity: propSelectedQuantity }: RadioQuantityProps) => {
    const [selectedQuantity, setSelectedQuantity] = useState(propSelectedQuantity);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedQuantity(event.currentTarget.value);
        onChange(event.currentTarget.value); 
    };

    return (
        <>
            {quantities.map((quantity) => (
                <div key={quantity.id} style={{ display: 'flex', alignItems: 'center' }}>
                    <input
                        type="radio"
                        id={`quantity-${quantity.id}`}
                        name="quantity"
                        value={quantity.dosage_qte}
                        checked={selectedQuantity === quantity.dosage_qte}
                        onChange={handleChange} 
                        style={{ display: 'none' }} 
                    />
                    <label
                        htmlFor={`quantity-${quantity.id}`}
                        style={{
                            ...radioLabelStyle,
                            ...(selectedQuantity === quantity.dosage_qte ? selectedRadioStyle : {})
                        }}
                    >
                        {quantity.dosage_qte}
                    </label>
                </div>
            ))}
        </>
    );
};

export default RadioQuantity;
