
import { Supplements } from '../Services/Data/SupplementInterfaces'; 
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import AspectRatio from '@mui/joy/AspectRatio';

interface CardSupplementsProps {
    supplement: Supplements;
}

export function CardSupplements({supplement}: CardSupplementsProps){
  return (
    <Card sx={{ width: 250, bgcolor: '#FFFFF', maxWidth: '100%', boxShadow: 'lg' }}>
    <AspectRatio minHeight="230px" sx={{ minWidth: 200 }}>
    <img src={supplement.img_supplements} />
  </AspectRatio>
      <CardContent sx={{ textAlign: 'center' }}>
        <Typography level="title-lg">{supplement.name}</Typography>
        <Typography variant="body2">
      {supplement.maker.map((m) => m.name_maker).join(", ")}
    </Typography>

        <Typography variant="h6" sx={{ mt: 1, fontWeight: 'xl', color: 'black' }}>
          {supplement.price.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' })}
        </Typography>
      </CardContent>
    </Card>
  );
}
