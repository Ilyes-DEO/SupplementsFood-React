import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import { Link as RouterLink } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Supplements } from '../../Services/Data/SupplementInterfaces'; 
import { loginAndGetToken, fetchSupplementsList } from '../../Services/Data/apiServices';


const PopularySupplementsCards = () => {
  const [supplementData, setSupplement] = useState<Supplements[]>([]);

  useEffect(() => {
    loginAndGetToken().then((token) => {
      fetchSupplementsList(token).then(setSupplement);
    });
  }, []);

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
                <Typography variant="body2">
                  {supplement.maker.map((m) => m.name_maker).join(", ")}
                </Typography>                
                <Typography
                  level="title-lg"
                  sx={{ mt: 1, fontWeight: 'xl', color: 'black' }}
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

export default PopularySupplementsCards;
 