import styled from 'styled-components';
import { withPrefix } from '../utils/with-prefix';

export interface ColorItemStyleProps {
  rawColor: string;
}

export const ColorItemStyle = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  background-color: ${(props: ColorItemStyleProps) => props.rawColor};
`;

export interface ColorItemProps {
  displayName?: string;
  rawColor: string;
}

export function ColorItem({ displayName, rawColor }: ColorItemProps) {
  return (
    <ColorItemStyle rawColor={rawColor}>
      <div>{withPrefix(rawColor, '#')}</div>

      {displayName && <div>{displayName}</div>}
    </ColorItemStyle>
  );
}
