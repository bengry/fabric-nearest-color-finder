import React from 'react';
import copy from 'clipboard-copy';

import { TextField, ITextFieldProps, ActionButton } from 'office-ui-fabric-react';

export interface CopyableInputProps extends ITextFieldProps {}

export function CopyableInput(props: CopyableInputProps) {
  return (
    <TextField
      {...props}
      styles={{
        suffix: { backgroundColor: 'inherit' },
      }}
      onRenderSuffix={() => {
        return (
          <ActionButton iconProps={{ iconName: 'Copy' }} disabled={!props.value} onClick={() => copy(props.value!)} />
        );
      }}
    />
  );
}
