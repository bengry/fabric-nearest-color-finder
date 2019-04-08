import React from 'react';
import { IDisplayPalette } from '../palettes/IDisplayPalette';
import { FabricPalette } from '../palettes/fabric';

export interface SelectedPaletteContext {
  selectedPalette: IDisplayPalette;
  setSelectedPalette: (displayPalette: IDisplayPalette) => void;
}

export const SelectedPaletteContext = React.createContext<SelectedPaletteContext>({
  selectedPalette: FabricPalette,
  setSelectedPalette: () => {},
});
