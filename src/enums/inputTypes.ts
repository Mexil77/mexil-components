export enum InputTypes {
  TEXT ='text',
  NUMBER = 'number',
  PASSWORD = 'password',
  EMAIL = 'email',
  TEL = 'tel',
  SERCH = 'serch',
}

type InputTypesKeys = keyof typeof InputTypes;

export const InputTypesArrKeys = Object.keys(InputTypes).map((size: string) => InputTypes[size as InputTypesKeys]);