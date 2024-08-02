export enum Sizes {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}

type SizesKeys = keyof typeof Sizes;

export const SizesArrKeys = Object.keys(Sizes).map((size: string) => Sizes[size as SizesKeys]);