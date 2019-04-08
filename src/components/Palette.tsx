import React from 'react';
import styled from 'styled-components';
import { IDisplayPalette } from '../palettes/IDisplayPalette';
import { DetailsList, IColumn, SelectionMode } from 'office-ui-fabric-react';

export interface PaletteProps {
  palette: IDisplayPalette;
}

interface PaletteItem {
  name: string;
  rawColor: string;
}

interface ColorSampleProps {
  color: string;
}

const ColorSample = styled.div`
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  background-color: ${(props: ColorSampleProps) => props.color};
`;

const columns: IColumn[] = [
  {
    key: 'sample',
    name: 'Color sample',
    minWidth: 92,
    maxWidth: 92,
    isResizable: true,
    onRender: (item: PaletteItem) => <ColorSample color={item.rawColor} />,
  },
  {
    key: 'semantic-name',
    name: 'Semantic name',
    minWidth: 200,
    maxWidth: 200,
    isResizable: true,
    isSorted: true,
    fieldName: 'name' as keyof PaletteItem,
  },
  {
    key: 'raw-color',
    name: 'Raw color',
    minWidth: 32,
    maxWidth: 32,
    isResizable: true,
    fieldName: 'rawColor' as keyof PaletteItem,
  },
];

export function Palette({ palette }: PaletteProps) {
  const paletteItems = Object.entries(palette.palette).map(([name, rawColor]) => ({ name, rawColor }));
  return <DetailsList items={paletteItems} compact columns={columns} selectionMode={SelectionMode.none} />;
}
