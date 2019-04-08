import React from 'react';
import { TextField } from 'office-ui-fabric-react';

export interface Color {
  displayName?: string;
  rawColor: string;
}

export interface OutputProps {
  color: Color;
}

export function Output({ color }: OutputProps) {
  return (
    <>
      <TextField readOnly label="Display name" value={color.displayName} />
      <TextField
        readOnly
        label="Raw value"
        value={color.rawColor}
        styles={{ field: { backgroundColor: color.rawColor } }}
      />
    </>
  );
}
