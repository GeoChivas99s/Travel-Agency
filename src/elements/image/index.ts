import styled from '@emotion/styled';
import {
  border,
  compose,
  display,
  flexbox,
  layout,
  position,
  shadow,
  space,
} from 'styled-system';

const Image = styled.img(
  compose(space, border, display, position, flexbox, shadow, layout)
);

export default Image;
