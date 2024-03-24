import { Paper, Title } from '@mantine/core';
import classes from '../MantineCss/ArticleCardImage.module.css';

interface ArticleCardImageProps {
  title: string;
  image: string;
}

export function ArticleCardImage({title, image}: ArticleCardImageProps) {

  const cardStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover', 
    backgroundPosition: 'center',
  };

  return (
    <Paper shadow="md" p="xl" radius="md" className={classes.card} style={cardStyle}>
      <div>
        <Title order={3} className={classes.title}>
          {title}
      </Title>
      </div>
    </Paper>
    
  );
}