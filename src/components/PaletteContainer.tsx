import React from 'react';
import styled from 'styled-components';

import { useSelectedPalette } from '../hooks/useSelectedPalette';
import { Palette } from './Palette';
import { Output } from './Output';
import { IPalette, TextField } from 'office-ui-fabric-react';
import { nearestColorInPalette } from "../utils/nearest-color";

export interface PaletteContainerProps {
}

export function PaletteContainer({}: PaletteContainerProps) {
    const {selectedPalette} = useSelectedPalette();

    return (
        <PaletteContainerStyle>
            <ClosestColor palette={selectedPalette.palette}/>

            <h2>Palette</h2>
            <Palette palette={selectedPalette}/>
        </PaletteContainerStyle>
    );
}

const PaletteContainerStyle = styled.main`
  display: flex;
  flex-direction: column;
`;

export interface ClosestColorProps {
    palette: IPalette;
}

const HEX_PATTERN = /^([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;

export function ClosestColor({palette}: ClosestColorProps) {
    const [input, setInput] = React.useState('');

    const isValidHexColor = HEX_PATTERN.test(input);
    const nearestColor = isValidHexColor ? nearestColorInPalette(`#${input}`, palette) : null;

    return (
        <>
        <h2>Closest color finder</h2>
        <ClosestColorContainerStyle>
            <ClosestColorStyle>
                <TextField label="Input" prefix="#" value={input} onChanged={setInput} style={{gridArea: 'input'}}/>
                <div style={{gridArea: 'output'}}>
                    <Output
                        color={nearestColor && {displayName: nearestColor.name, rawColor: nearestColor.rawValue}}/>
                </div>
            </ClosestColorStyle>
        </ClosestColorContainerStyle></>
    );
}

const ClosestColorContainerStyle = styled.section`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 1rem;
`;

const ClosestColorStyle = styled.section`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 10px;
  grid-template-areas:
    "input ."
    "output output"
`;

