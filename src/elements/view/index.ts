import styled from '@emotion/styled';
import {
  background,
  border,
  color,
  compose,
  layout,
  position,
  shadow,
  space,
  system,
  typography,
} from 'styled-system';

import { ViewProps } from './view.types';

const View = styled.div<ViewProps>(
  compose(
    color,
    position,
    space,
    border,
    shadow,
    layout,
    typography,
    background,
    system({
      cursor: true,
    })
  )
);

export default View;
