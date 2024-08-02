export enum Variants {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  WARNING = 'warning',
  ALERT = 'alert',
  OUTLINE_PRIMARY = 'outline-primary',
  OUTLINE_SECONDARY = 'outline-secondary',
  OUTLINE_WARNING = 'outline-warning',
  OUTLINE_ALERT = 'outline-alert',
}

type VariantKeys = keyof typeof Variants;

export const VariantsArrKeys = Object.keys(Variants).map((variant: string) => Variants[variant as VariantKeys]);

