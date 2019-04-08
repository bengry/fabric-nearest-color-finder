import styled from 'styled-components';

export interface ColorItemSummaryProps {
  rawColor: string;
}

export const ColorItemSummary = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 1rem;
  width: 1rem;
  background-color: ${(props: ColorItemSummaryProps) => props.rawColor};
`;
