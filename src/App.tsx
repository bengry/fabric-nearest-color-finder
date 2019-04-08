import React from 'react';

import './App.css';

import { FabricPalette } from './palettes/fabric';
import { IDisplayPalette } from './palettes/IDisplayPalette';
import { FluentPalette } from './palettes/fluent';
import { Palettes } from './components/Palettes';
import { SelectedPaletteContext } from './context/SelectedPaletteContext';

const palettes: IDisplayPalette[] = [FabricPalette, FluentPalette];

export function App() {
    const [selectedPalette, setSelectedPalette] = React.useState<IDisplayPalette>(FabricPalette);

    return (
        <SelectedPaletteContext.Provider value={{selectedPalette, setSelectedPalette}}>
            <Palettes palettes={palettes}/>
        </SelectedPaletteContext.Provider>
    );
}
