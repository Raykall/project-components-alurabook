import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { AbCard } from '../src/components/AbCard';

export default {
  title: 'components/Card',
  component: AbCard,
} as ComponentMeta<typeof AbCard>;

export const CardComponent = () => {
  return (
  <AbCard>
    <h1>olá, eu sou um card</h1>
  </AbCard>
  );
};
