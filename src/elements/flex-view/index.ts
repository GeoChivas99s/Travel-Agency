import styled from '@emotion/styled';
import {
  background,
  border,
  color,
  compose,
  flexbox,
  grid,
  layout,
  position,
  shadow,
  space,
  system,
  typography,
} from 'styled-system';

import { FlexViewProps } from './flex-view.types';

const FlexView = styled.div<FlexViewProps>(
  {
    display: 'flex',
  },
  compose(
    color,
    space,
    grid,
    border,
    layout,
    typography,
    grid,
    shadow,
    position,
    background,
    flexbox,
    system({
      cursor: true,
      gap: {
        property: 'gap',
        scale: 'space',
      },
    })
  )
);

export default FlexView;
