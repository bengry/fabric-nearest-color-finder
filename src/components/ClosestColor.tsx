import React from 'react';
import styled from 'styled-components';
import { IPalette, TextField, Separator } from 'office-ui-fabric-react';

import { nearestColorInPalette } from '../utils/nearest-color';
import { Output } from './Output';

export interface ClosestColorProps {
  palette: IPalette;
}

const HEX_PATTERN = /^([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;

export function ClosestColor({ palette }: ClosestColorProps) {
  const [input, setInput] = React.useState('');

  const isValidHexColor = HEX_PATTERN.test(input);
  const nearestColor = isValidHexColor ? nearestColorInPalette(`#${input}`, palette) : null;

  return (
    <ClosestColorStyle>
      <TextField
        label="Input"
        prefix="#"
        value={input}
        onChange={(_e, newValue) => setInput(newValue!)}
        onPaste={e => {
          const text = e.clipboardData.getData('text');
          if (text.startsWith('#')) {
            e.preventDefault();
            setInput(text.slice(1));
          }
        }}
      />
      <Separator
        vertical
        styles={({ theme }) => ({
          root: {
            selectors: { '&:after': { backgroundColor: theme.palette.neutralQuaternaryAlt } },
          },
        })}
      />
      <Output color={nearestColor && { displayName: nearestColor.name, rawColor: nearestColor.rawValue }} />
    </ClosestColorStyle>
  );
}

const ClosestColorStyle = styled.section`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: auto auto 1fr;
  grid-gap: 48px;
`;
