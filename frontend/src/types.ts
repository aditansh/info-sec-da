export interface APIResponse {
  status: boolean;
  msg: string;
  data?: object;
}

export interface User {
  name: string;
  username: string;
  email: string;
  phone: string;
  role: string;
}

export interface Movie {
  title: string;
  year: string;
  director: string;
  genre: string;
}
