import styled from '@emotion/styled';
import {
  border,
  color,
  compose,
  display,
  layout,
  shadow,
  space,
  typography,
} from 'styled-system';

const Select = styled.select(
  {
    width: '45%',
    height: '30px',
    borderRadius: '3px',
    outline: 'none',
    fontSize: '1rem',
  },
  compose(color, space, border, shadow, display, layout, typography)
);

export default Select;
