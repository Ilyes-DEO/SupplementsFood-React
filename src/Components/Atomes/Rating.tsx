import * as React from 'react';
import { Rating } from '@mantine/core';

export default function BasicRating() {
  const [value, setValue] = React.useState<number | null>(4);
  
  return <Rating value={3.5} fractions={2} readOnly />;
}