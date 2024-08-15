export interface IFormData {
  name: string;
  age: number;
  email: string;
  password: string;
  repeatPassword: string;
  gender: string;
  confirm: boolean;
  picture: string;
  country: string;
}

export interface IFormValidationErrors {
  name?: string;
  age?: number;
  email?: string;
  password?: string;
  repeatPassword?: string;
  gender?: string;
  confirm?: boolean;
  picture?: string;
  country?: string;
}
