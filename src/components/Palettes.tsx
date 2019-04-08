import React from 'react';
import styled from 'styled-components';
import { IDisplayPalette } from '../palettes/IDisplayPalette';
import { PaletteContainer } from './Palette/PaletteContainer';
import { useSelectedPalette } from "../hooks/useSelectedPalette";

export interface PalettesProps {
    palettes: ReadonlyArray<IDisplayPalette>;
}

export function Palettes({palettes}: PalettesProps) {
    const {selectedPalette, setSelectedPalette} = useSelectedPalette();

    return (
        <PalettesStyle>
            {palettes.map((displayPalette) => {
                return (
                    <PaletteContainer
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
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
`;
