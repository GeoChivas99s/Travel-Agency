import styled from '@emotion/styled';
import {
  border,
  borderRadius,
  color,
  compose,
  display,
  layout,
  shadow,
  space,
  typography,
} from 'styled-system';

const Input = styled.input(
  {
    width: '50%',
    margin: '10px',
    padding: '10px',
    borderRadius: '5px',
  },
  compose(
    color,
    space,
    border,
    shadow,
    display,
    layout,
    typography,
    borderRadius
  )
);

export default Input;
