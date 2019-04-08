import React from 'react';
import { IDisplayPalette } from '../palettes/IDisplayPalette';

export interface PaletteProps {
  palette: IDisplayPalette;
}

export function Palette({ palette }: PaletteProps) {
  return <div>Palette</div>;
}
