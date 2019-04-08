import React from 'react';
import { IPalette } from '@uifabric/styling';

import { ColorItemSummary } from './ColorItemSummary';
import styled from 'styled-components';

export interface PaletteProps {
  palette: IPalette;
}

const PaletteStyle = styled.div`
  display: grid;
  width: fit-content;
  grid-template-columns: repeat(7, 1fr);
`;

export function Palette({ palette }: PaletteProps) {
  const colorItems = Object.entries(palette).map(([name, value]) => {
    return <ColorItemSummary key={name} rawColor={value} />;
  });

  return <PaletteStyle>{colorItems}</PaletteStyle>;
}
