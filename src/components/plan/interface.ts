import { MouseEvent } from 'react';

export interface IPlanBox {
  id: number;
  title: string;
  price: number;
  descriptions: Array<string>;

  selected?: boolean;
  onClick?: (event: MouseEvent<HTMLElement>, planId: number) => void;
}

export interface IPlanSection {
  data: IPlanBox[];
  onClick?: (event: MouseEvent<HTMLElement>, planId: number) => void
}