import React from 'react';
import copy from 'clipboard-copy';

import { TextField, ITextFieldProps, ActionButton } from 'office-ui-fabric-react';

export interface CopyableInputProps extends ITextFieldProps {}

export function CopyableInput(props: CopyableInputProps) {
  return (
    <TextField
      {...props}
      styles={{
        prefix: { marginRight: '8px' },
        field: { padding: '0' },
        suffix: { backgroundColor: 'inherit', padding: 0, marginLeft: '8px' },
      }}
      onRenderSuffix={() => {
        return (
          <ActionButton iconProps={{ iconName: 'Copy' }} disabled={!props.value} onClick={() => copy(props.value!)} />
        );
      }}
    />
  );
}
