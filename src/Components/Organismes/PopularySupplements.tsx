import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import { Link as RouterLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Supplements } from '../../Services/Data/SupplementInterfaces'; 
import { loginAndGetToken, fetchSupplementsList } from '../../Services/Data/apiServices';
import { Box } from '@mantine/core';
import { CardSupplements } from '../Molecules/CardSupplements';


const PopularySupplementsCards = () => {
  const [supplementData, setSupplement] = useState<Supplements[]>([]);

  useEffect(() => {
    loginAndGetToken().then((token) => {
      fetchSupplementsList(token).then(setSupplement);
    });
  }, []);

  return (
    <>
      <Box pb={200}>

      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
        {supplementData.map((supplement) => (
          <RouterLink key={supplement.id} to={`/supplements/${supplement.id}`} style={{ textDecoration: 'none' }}>
            <CardSupplements supplement={supplement} />
          </RouterLink>
        ))}
      </div>
      </Box>
    </>
  );
};

export default PopularySupplementsCards;
 