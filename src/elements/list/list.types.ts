import { HTMLAttributes } from 'react';
import {
  ColorProps,
  FlexboxProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
  TypographyProps,
} from 'styled-system';

export interface ListProps
  extends Omit<HTMLAttributes<HTMLUListElement>, 'color'>,
    ColorProps,
    LayoutProps,
    PositionProps,
    FlexboxProps,
    SpaceProps,
    TypographyProps {}
