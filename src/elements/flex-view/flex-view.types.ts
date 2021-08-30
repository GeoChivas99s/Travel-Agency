import { FlexboxProps, GridProps } from 'styled-system';

import { ViewProps } from '../view/view.types';

export interface FlexViewProps extends ViewProps, FlexboxProps, GridProps {
  gap?: string;
}
