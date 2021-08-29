import { CSSProperties } from 'react';
import {
  BorderProps,
  ColorProps,
  LayoutProps,
  PositionProps,
  SpaceProps,
  TypographyProps,
} from 'styled-system';

export interface TextProps
  extends TypographyProps,
    ColorProps,
    BorderProps,
    PositionProps,
    LayoutProps,
    SpaceProps {
  textTransform?: CSSProperties['textDecoration'];
}
