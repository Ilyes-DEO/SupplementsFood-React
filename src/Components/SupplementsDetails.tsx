import * as React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import Typography from '@mui/joy/Typography';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';



const SupplementsDetails = () => {
  const { id } = useParams();
  const [supplementData, setSupplement] = useState<Supplements | null>(null);
  const [value, setValue] = useState<number | string | null>('');  // State declaration for value

  interface Supplements {
    id: number;
    name: string;
    img_supplements: string;
    category: string;
    qte_stock: number;
    price: number;
    maker: string;
  }

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
      .then((supplementData) => setSupplement(supplementData));
  };


  
  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      {supplementData ? (
        <div className="d-flex">
          {/* Première carte avec l'image */}
          <Card className="text-center" style={{ maxWidth: '400px', marginRight: '20px' }}>
            <Card.Img
              variant="top"
              src={supplementData.img_supplements}
              alt="Supplement Image"
              style={{ width: '100%', height: 'auto', display: 'block', margin: 'auto' }}
            />
            <Card.Body></Card.Body>
          </Card>

          <Card className="" style={{ maxWidth: '400px' }}>
            <Card.Body className="d-flex flex-column align-items-center">
              <Card.Title style={{ fontSize: '35px', fontWeight: 'bold' }}>{supplementData.name}</Card.Title>
              <Typography level="h3" style={{ fontSize: '15px' }}>
                {supplementData.maker}
              </Typography>
              <br />
              <Select color="neutral" disabled={false} placeholder="Choose one…" size="md" variant="outlined">
                <Option>...</Option>
              </Select>
              <br />
              <NumericInput className="form-control"/>

              <Button style={{ backgroundColor: 'red', color: 'white', borderColor: 'red', borderRadius: '0' }}>Ajouter au panier</Button>
            </Card.Body>
          </Card>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default SupplementsDetails;
