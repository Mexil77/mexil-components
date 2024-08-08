export enum States {
  SUCCESS ='success' ,
  WARNING = 'warning' ,
  ALERT = 'alert' ,
  NORMAL = 'normal',
}

type StatesKeys = keyof typeof States;

export const StatesArrKeys = Object.keys(States).map((size: string) => States[size as StatesKeys]);