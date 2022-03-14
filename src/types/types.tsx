export interface IAddress {
  city: string;
  street: string;
  zipcode: string;
}

export interface ICompany {
  name: string;
}

export interface IAllUsers {
  id: number;
  name: string;
  address: IAddress;
  company: ICompany;
}

export interface IUser {
  id: number;
  name: string;
  username: string;
  phone: string;
  website: string;
  email: string;
  address: IAddress;
}
