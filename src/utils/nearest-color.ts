import { nearestFrom } from 'nearest-colors';
import { IPalette } from '@uifabric/styling';
import { memoize } from 'lodash';

const nearestFromPalette = memoize((palette: IPalette) => nearestFrom(palette as {}));

export function nearestColorInPalette(color: string, palette: IPalette) {
  const nearestColorMatch = nearestFromPalette(palette)(color);

  if (Array.isArray(nearestColorMatch)) {
    // TODO: handle this
    throw new Error('Unexpected output');
  }

  return {
    name: nearestColorMatch.name,
    rawValue: nearestColorMatch.value,
  };
}
