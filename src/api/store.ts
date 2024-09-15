import { configureStore } from '@reduxjs/toolkit';
import { projectApi } from './projectApi';
import { authAPi } from './authApi';
import { projectImagesApi } from './projectImagesApi';


export const store = configureStore({
 
  reducer: {
    
    [projectApi.reducerPath]: projectApi.reducer,
    [authAPi.reducerPath]: authAPi.reducer,
    [projectImagesApi.reducerPath]: projectImagesApi.reducer,
  
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
       
        projectApi.middleware, 
        projectImagesApi.middleware,
        authAPi.middleware,
    ),
    // devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
