import React from 'react';
import styled from 'styled-components';
import { IPalette } from '@uifabric/styling';
import { Palette } from './Palette';

export interface PaletteContainerProps {
    paletteName: string;
    palette: IPalette;
    isSelected?: boolean;
    onPaletteClick?: () => void;
}

interface PaletteContainerStyleProps {
    isSelected?: boolean;
}

const PaletteContainerStyle = styled.button`
  border: ${(props: PaletteContainerStyleProps) => props.isSelected && '#0000ff85 solid 3px'};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;
  background: unset;
`;

const PaletteName = styled.h2`
  margin: 0;
`;

export function PaletteContainer({paletteName, palette, isSelected, onPaletteClick}: PaletteContainerProps) {
    return (
        <PaletteContainerStyle isSelected={isSelected} onClick={onPaletteClick}>
            <PaletteName>{paletteName}</PaletteName>
            <Palette palette={palette}/>
        </PaletteContainerStyle>
    );
}
