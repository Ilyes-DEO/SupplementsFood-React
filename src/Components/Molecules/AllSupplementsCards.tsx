
import { Link as RouterLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { CardSupplements } from './CardSupplements';
import { Supplements } from '../../Services/Data/SupplementInterfaces'; 
import { loginAndGetToken, fetchSupplementsList } from '../../Services/Data/apiServices';

const AllSupplementsCards = () => {
  const [supplementData, setSupplement] = useState<Supplements[]>([]);

  useEffect(() => {
    loginAndGetToken().then((token) => {
      fetchSupplementsList(token).then(setSupplement);
    });
  }, []);

  return (
    <>
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
        {supplementData.map((supplement: Supplements) => (
          <RouterLink key={supplement.id} to={`/supplements/${supplement.id}`} style={{ textDecoration: 'none' }}>
                <CardSupplements key={supplement.id} supplement={supplement} />
          </RouterLink>
        ))}
      </div>
    </>
  );
};

export default AllSupplementsCards;
