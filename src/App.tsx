import React from 'react';

import { FabricPalette } from './palettes/fabric';
import { FluentPalette } from './palettes/fluent';
import { IDisplayPalette } from './palettes/IDisplayPalette';
import { M365Palette } from './palettes/m365';
import { PaletteContainer } from './components/PaletteContainer';
import { Palettes } from './components/Palettes';
import { SelectedPaletteContext } from './context/SelectedPaletteContext';

const palettes: IDisplayPalette[] = [FabricPalette, FluentPalette, M365Palette];

export function App() {
  const [selectedPalette, setSelectedPalette] = React.useState<IDisplayPalette>(FabricPalette);

  return (
    <SelectedPaletteContext.Provider value={{ selectedPalette, setSelectedPalette }}>
      <Palettes palettes={palettes} />
      <PaletteContainer />
    </SelectedPaletteContext.Provider>
  );
}
