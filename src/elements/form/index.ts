import styled from '@emotion/styled';
import {
  background,
  border,
  color,
  compose,
  flexbox,
  layout,
  position,
  shadow,
  space,
  system,
  typography,
} from 'styled-system';

import { FormProps } from './form.types';

const Form = styled.form<FormProps>(
  compose(
    color,
    position,
    space,
    border,
    shadow,
    flexbox,
    layout,
    typography,
    background,
    system({
      cursor: true,
    })
  )
);

export default Form;
