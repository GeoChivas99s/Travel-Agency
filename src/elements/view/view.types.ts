import { CSSProperties, HTMLAttributes } from 'react';
import {
  BackgroundProps,
  BorderProps,
  ColorProps,
  DisplayProps,
  LayoutProps,
  PositionProps,
  ShadowProps,
  SpaceProps,
  TypographyProps,
} from 'styled-system';

export interface ViewProps
  extends ColorProps,
    SpaceProps,
    BorderProps,
    LayoutProps,
    PositionProps,
    DisplayProps,
    ShadowProps,
    BackgroundProps,
    TypographyProps,
    Omit<HTMLAttributes<HTMLDivElement>, 'color'> {
  cursor?: CSSProperties['cursor'];
}
