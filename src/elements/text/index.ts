import styled from '@emotion/styled';
import {
  border,
  color,
  compose,
  layout,
  position,
  space,
  system,
  typography,
} from 'styled-system';

import { TextProps } from './text.types';

const Text = styled.p<TextProps>(
  compose(
    layout,
    border,
    position,
    color,
    typography,
    space,
    system({
      textTransform: true,
    })
  )
);

export default Text;
