import { css } from '@emotion/react';

import { fill, normal } from '../common/buttons';
import colors from './colors';

export const primary = css`
  ${normal}
  border: 1px ${colors.normal} solid;
  color: ${colors.normal};
  background-color: ${colors.normal_white};
`;
export const secundary = css`
  ${fill}
  background-color: ${colors.normal};
  border: 1px ${colors.normal} solid;
`;
