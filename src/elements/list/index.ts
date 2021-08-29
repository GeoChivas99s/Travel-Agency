import styled from '@emotion/styled';
import {
  color,
  compose,
  flexbox,
  layout,
  position,
  space,
  typography,
} from 'styled-system';

import { ListProps } from './list.types';

export const List = styled.ul<ListProps>(
  {
    listStyle: 'none',
  },
  compose(space, color, layout, flexbox, position, typography)
);

export default List;
