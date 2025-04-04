// src/types/auth.ts

export interface LoginResponse {
    userId: number;
    accessToken: string;
  }
  
  export interface JoinResponse {
    userId: string;
    name: string;
    email: string;
  }
  