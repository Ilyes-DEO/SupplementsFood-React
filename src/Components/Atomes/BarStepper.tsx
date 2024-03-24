import { useState } from 'react';
import {
  IconUserCheck,
  IconMailOpened,
  IconCards,
  IconCreditCard,
  IconUser,
  IconTruckDelivery,

} from '@tabler/icons-react';
import { Stepper, rem } from '@mantine/core';
import { Box } from '@mantine/core';

export function BarStepper() {
  
  return (
    <Box pb={5}>
    <Stepper color="rgba(0, 0, 0, 1)" radius="md" size="md">
    <Stepper.Step 
    icon={<IconUser style={{ width: rem(25), height: rem(25) }} />}
    label="Compte" description="Profitez de réductions plus importantes."/>
    <Stepper.Step icon={<IconTruckDelivery style={{ width: rem(25), height: rem(25) }} />}
    label="Livraison" description="Livraison gratuite dès 50€" />
    <Stepper.Step icon={<IconCreditCard style={{ width: rem(25), height: rem(25) }} />}
    label="Paiement" description="100% sécurisé" />
    </Stepper>
</Box>
  );
}