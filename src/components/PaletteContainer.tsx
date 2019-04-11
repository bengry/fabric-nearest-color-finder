import React from 'react';
import styled from 'styled-components';
import { IPalette } from 'office-ui-fabric-react';

import { useSelectedPalette } from '../hooks/useSelectedPalette';
import { ClosestColor } from './ClosestColor';
import { Palette } from './Palette';

export function PaletteContainer() {
  const { selectedPalette } = useSelectedPalette();

  return (
    <PaletteContainerStyle>
      <ClosestColorSection palette={selectedPalette.palette} />
      <PaletteSection palette={selectedPalette.palette} />
    </PaletteContainerStyle>
  );
}

const PaletteContainerStyle = styled.main`
  display: grid;
  grid-gap: 1.5rem;
  margin: 3rem;
`;

const ClosestColorSection = ({ palette }: { palette: IPalette }) => (
  <>
    <Header>Closest color finder</Header>
    <ClosestColor palette={palette} />
  </>
);

const PaletteSection = ({ palette }: { palette: IPalette }) => (
  <>
    <Header>Palette</Header>
    <Palette palette={palette} />
  </>
);

const Header = styled.h2`
  margin: 0;
`;
