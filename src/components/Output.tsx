import React from 'react';
import { TextField } from 'office-ui-fabric-react';
import styled from "styled-components";

export interface Color {
    displayName?: string;
    rawColor: string;
}

export interface OutputProps {
    color?: Color | null;
}

export const Output: React.FC<OutputProps> = ({color}) => {
    return (
        <OutputStyle>
            <TextField readOnly borderless label="Display name:" value={color ? color.displayName : ''}/>
            <TextField
                readOnly
                borderless
                label="Raw value:"
                value={color ? color.rawColor : ''}
                onRenderAddon={() => <ColorBox colorCode={color ? color.rawColor : null}/>}
            />
        </OutputStyle>
    );
};


const OutputStyle = styled.div`
  display: flex;
  flex-direction: row;
`;

interface ColorBoxProps {
    colorCode?: string | null;
}

const ColorBox = styled.div`
  background-color:${({colorCode}: ColorBoxProps) => colorCode ? colorCode : 'inherit'};
  width: 1rem;
  height: 1rem;
`;