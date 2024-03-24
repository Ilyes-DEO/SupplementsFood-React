import { Image } from '@mantine/core';
import { Box } from '@mantine/core';

interface ImageBandProps {
  backgroundColor: string;
  height: string;
  children?: React.ReactNode;
}

export function ImageBand({ backgroundColor, height, children }: ImageBandProps) {
  return (
    <Box pb={40} style={{ height, backgroundColor, position: 'relative' }}>
      {children}
    </Box>
    
  );
}
