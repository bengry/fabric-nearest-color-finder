import React from 'react';
import styled from 'styled-components';
import { IDisplayPalette } from '../palettes/IDisplayPalette';
import { PaletteSummaryContainer } from './PaletteSummary/PaletteSummaryContainer';
import { useSelectedPalette } from '../hooks/useSelectedPalette';

export interface PalettesProps {
  palettes: ReadonlyArray<IDisplayPalette>;
}

export function Palettes({ palettes }: PalettesProps) {
  const { selectedPalette, setSelectedPalette } = useSelectedPalette();

  return (
    <PalettesStyle>
      {palettes.map(displayPalette => {
        return (
          <PaletteSummaryContainer
            key={displayPalette.displayName}
            paletteName={displayPalette.displayName}
            palette={displayPalette.palette}
            isSelected={selectedPalette && selectedPalette.palette === displayPalette.palette}
            onPaletteClick={() => setSelectedPalette(displayPalette)}
          />
        );
      })}
    </PalettesStyle>
  );
}

const PalettesStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
`;
