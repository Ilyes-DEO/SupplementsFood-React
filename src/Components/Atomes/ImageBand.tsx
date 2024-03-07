import { Image } from '@mantine/core';
import { Box } from '@mantine/core';

export function ImageBand() {
  return (
    <Box pb={40}>
    <Image
    src={null}
      h={150}
      fallbackSrc="https://html-color.org/61B4EC.jpg"
    />
  </Box>
  );
}