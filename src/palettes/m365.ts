import { IDisplayPalette } from './IDisplayPalette';

import { FabricPalette } from './fabric';

export const M365Palette: IDisplayPalette = {
  displayName: 'M365',
  palette: {
    ...FabricPalette.palette,
    redDark: '#A80000',
    red: '#E81123',
    orangeLighter: '#FF8C00',
    greenLight: '#BAD80A',
    green: '#107C10',
    neutralQuaternary: '#D0D0D0',
    tealLight: '#00A5B0',
    magentaDark: '#4B003F',
    purpleLight: '#917EDB',
    blueDark: '#001D3F',
    greenDark: '#022F22',
    orangeLight: '#E86E58',
    // darkBrown: '#502006', // not available in office-ui-fabric-react's palette
    neutralQuaternaryAlt: '#D9D9D9',
    neutralLighter: '#F5F5F5',
  },
};
