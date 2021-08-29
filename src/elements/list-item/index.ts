import styled from '@emotion/styled';
import {
  border,
  color,
  compose,
  flexbox,
  layout,
  position,
  space,
  system,
  typography,
} from 'styled-system';

import { ListItemProps } from './list-item.types';

const ListItem = styled.li<ListItemProps>(
  {
    display: 'flex',
  },
  compose(
    space,
    border,
    flexbox,
    color,
    layout,
    position,
    typography
  )
);

export default ListItem;
