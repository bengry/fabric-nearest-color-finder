import React from 'react';
import { SelectedPaletteContext } from '../context/SelectedPaletteContext';

export function useSelectedPalette() {
  return React.useContext(SelectedPaletteContext);
}
