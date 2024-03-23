import { Image } from '@mantine/core';
import { Box } from '@mantine/core';

interface TitleHomeProps {
  title: string;
}

export function TitleHome({ title }: TitleHomeProps) {
  return (
    <Box pb={30}>
   <h1 style={{textAlign: 'center', fontSize:'2em', fontWeight:'bold'}}>{title}</h1>
  </Box>
  );
}