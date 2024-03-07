import { useCallback } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import Typography from '@mui/joy/Typography';
import BasicRating from './Atomes/Rating';
import RetailComponenent from './Molecules/DetailContainer';
import { Supplements,Quantity,Flavor} from '../Services/Data/Supplement';
import  SelectFlavor  from './Atomes/SelectFlavor';
import RadioContainer from './Molecules/RadioContainer';
import RadioQuantity from './Atomes/RadioQuantity';
import SelectEmpty from './Atomes/SelectEmpty';
import { TabsSupplements } from './Organismes/TabsSupplements';

const SupplementsDetails = () => {
  const { id } = useParams();
  const [supplementData, setSupplementData] = useState<Supplements | null>(null);
  const [state, setState] = useState(1);
  const [selectedFlavor, setSelectedFlavor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [selectedQuantity, setSelectedQuantity] = useState('');


  const handleFlavorChange = (event) => {
  console.log(event); 
  console.log(event.target);
  console.log(event.target.value); 
    setSelectedFlavor(event.target.value);
  };

  const handleQuantityChange = (event) => {
    console.log(event); 

    console.log(event.target.value); 
    setSelectedQuantity(event.target.value);
  };

 
  useEffect(() => {
    axios
      .post(
        "http://127.0.0.1:8741/api/login_check",
        { email: "ilyes@email.com", password: "1234" },
        { headers: { "Content-Type": "application/json" } }
      )
      .then((res) => res.data)
      .then((res) => res.token)
      .then((token) => fetchSupplementDetails(token));
  }, [id]);

  const fetchSupplementDetails = (token: string) => {
    axios
      .get(`http://127.0.0.1:8741/api/supplements/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then((res) => res.data)
      .then((supplementData) => setSupplementData(supplementData));
  };

  const radioLabelStyle = {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    padding: '5px 10px',
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

  const addToBasket = useCallback(() => {
    try {
      const basket = JSON.parse(localStorage.getItem('basket') || '[]');
      console.log('selectedFlavor:', selectedQuantity);
      const supplementToAdd = {
        supplementId: id, 
        quantity: state,
        flavor: selectedFlavor,
        name: supplementData.name,
        price: totalPrice,
        quantity_dosage: selectedQuantity
      };
      basket.push(supplementToAdd);
      localStorage.setItem('basket', JSON.stringify(basket));
      console.log('Article ajouté au panier local');
    } catch (error) {
      console.error('Erreur lors de l\'ajout au panier:', error);
    }
  }, [id, state, selectedFlavor, supplementData, selectedQuantity]);
  if (!supplementData || typeof supplementData.price !== 'number') {
    return <p>Erreur de données</p>;
  }

  const totalPrice = supplementData.price * state;

  return (
    <><RetailComponenent>
      {supplementData ? (
        <div className="d-flex justify-content-center" style={{ gap: '20px', maxWidth: '1200px' }}>
          <Card style={{ width: '600px', display: 'flex', flexDirection: 'column' }}>
            <Card.Img
              variant="top"
              src={supplementData.img_supplements}
              alt="Supplement Image"
              style={{ width: '100%', height: 'auto' }} />
          </Card>

          <Card style={{ width: '600px', display: 'flex', flexDirection: 'column' }}>            
          <Card.Body className="d-flex flex-column align-items-center p-4" style={{ backgroundColor: '#f8f9fa', borderRadius: '10px', color: '#343a40', boxShadow: '0 4px 16px rgba(0, 0, 0, 0.05)' }}>
              <Card.Title style={{ fontSize: '30px', fontWeight: '600', color: '#495057', marginBottom: '15px' }}>{supplementData.name}</Card.Title>
              <Typography level="h3" style={{ fontSize: '16px', color: '#6c757d', marginBottom: '7px' }}>
                {supplementData.maker}
              </Typography>

              <BasicRating />
              {supplementData.flavors && supplementData.flavors.length > 0 && (
                <SelectFlavor
                  flavors={supplementData.flavors}
                  onChange={handleFlavorChange}>
                </SelectFlavor>
              )}
              {supplementData.flavors && supplementData.flavors.length === 0 && (
                <SelectEmpty />
              )}

              <RadioContainer>
                <RadioQuantity
                  quantities={supplementData.quantity_dosage}
                  onChange={handleQuantityChange}
                  selectedQuantity={selectedQuantity}
                >
                </RadioQuantity>
              </RadioContainer>

              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '20px' }}>
                <input
                  type="number"
                  value={state}
                  onChange={(e) => setState(Number(e.target.value))}
                  style={{
                    flex: 1,
                    padding: '10px',
                    border: '1px solid #ced4da',
                    borderRadius: '5px',
                    color: '#495057',
                    backgroundColor: 'white',
                    boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.06)',
                  }}
                  min="1"
                  max="300" />
                <Typography
                  level="title-lg"
                  sx={{ padding: '10px', fontWeight: 'bold', color: '#28a745', backgroundColor: 'white', border: '1px solid #ced4da', borderRadius: '5px', boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.06)' }}
                >
                  {totalPrice.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })}
                </Typography>
              </div>

              <Button
                variant="primary"
                style={{
                  width: '100%',
                  padding: '10px 0',
                  fontSize: '18px',
                  color: 'white',
                  backgroundColor: '#007bff',
                  border: 'none',
                  borderRadius: '5px',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s ease',
                }}
                onClick={addToBasket}
              >
                <p>Ajouter au panier</p>
              </Button>
            </Card.Body>
          </Card>
        </div>

      ) : (
        <p>Loading...</p>
      )}
    </RetailComponenent>
    <div style={{ justifyContent: 'center', alignItems: 'center' }}>
  <Card>
      <TabsSupplements /> 
              
  </Card>
</div></>
  );
}


export default SupplementsDetails;
