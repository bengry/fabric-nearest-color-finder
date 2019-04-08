import React from 'react';
import styled from 'styled-components';
import { IPalette } from '@uifabric/styling';

import { PaletteSummary } from './PaletteSummary';

export interface PaletteSummaryContainerProps {
  paletteName: string;
  palette: IPalette;
  isSelected?: boolean;
  onPaletteClick?: () => void;
}

interface PaletteSummaryContainerStyleProps {
  isSelected?: boolean;
}

const PaletteSummaryContainerStyle = styled.button`
  outline: ${(props: PaletteSummaryContainerStyleProps) => props.isSelected && '#0000ff85 solid 3px'};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;
  background: unset;
`;

const PaletteName = styled.h2`
  margin: 0;
`;

export function PaletteSummaryContainer({
  paletteName,
  palette,
  isSelected,
  onPaletteClick,
}: PaletteSummaryContainerProps) {
  return (
    <PaletteSummaryContainerStyle isSelected={isSelected} onClick={onPaletteClick}>
      <PaletteName>{paletteName}</PaletteName>
      <PaletteSummary palette={palette} />
    </PaletteSummaryContainerStyle>
  );
}
