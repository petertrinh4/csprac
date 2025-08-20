import type { ReactNode } from 'react';

export type Module = {
  id: string;
  title: string;
  intro: string;
  image: string;
  content: ReactNode;
  img_position: string;
};
