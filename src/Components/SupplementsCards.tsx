import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import { Link as RouterLink } from 'react-router-dom'; // Importez le composant Link de React Router
import axios from 'axios';
import { useEffect, useState } from 'react';

const SupplementsCards = () => {
  const [supplementData, setSupplement] = useState([]);

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
      .then((token) => fetchSupplementslist(token));
  }, []);

  const fetchSupplementslist = (token) => {
    axios
      .get("http://127.0.0.1:8741/api/supplements", {
        headers: { Authorization: `Bearer ${token}` }
      })
      .then((res) => res.data)
      .then((supplementData) => setSupplement(supplementData));
  };

  return (
    <>
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
        {supplementData.map((supplement) => (
          <RouterLink key={supplement.id} to={`/supplements/${supplement.id}`} style={{ textDecoration: 'none' }}>
            <Card sx={{ width: 250, bgcolor: '#FFFFF', maxWidth: '100%', boxShadow: 'lg' }}>
              <AspectRatio minHeight="230px" sx={{ minWidth: 200 }}>
                <img
                  src={supplement.img_supplements}
                  loading="lazy"
                  alt=""
                />
              </AspectRatio>
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography level="title-lg">{supplement.name}</Typography>
                <Typography variant="body2">{supplement.maker}</Typography>
                <Typography
                  level="title-lg"
                  sx={{ mt: 1, fontWeight: 'xl', color: 'red' }}
                >
                  {supplement.price.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })}
                </Typography>
              </CardContent>
            </Card>
          </RouterLink>
        ))}
      </div>
    </>
  );
};

export default SupplementsCards;
