import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AuthResponse } from './types'; // Adjust the import path accordingly
import { baseUrl} from './apiConnection';



export const authAPi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ 
    baseUrl: baseUrl 
  }), // Adjust base URL if needed
  endpoints: (builder) => ({
    // Sign up
    signup: builder.mutation<any, { email: string; password: string }>({
      query: (credentials) => ({
        url: '/signup',
        method: 'POST',
        body: credentials,
      }),
    }),

    // Sign in
    signin: builder.mutation<any, { email: string; password: string }>({
      query: (credentials) => ({
        url: '/signin',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
});

// Export hooks for usage in functional components
export const { useSignupMutation, useSigninMutation } = authAPi;
