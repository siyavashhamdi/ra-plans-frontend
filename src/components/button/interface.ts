import { MouseEvent } from 'react';

export interface IButton {
  text: string;
  disabled?: boolean;
  onClick?: (event: MouseEvent<HTMLElement>) => void
}
