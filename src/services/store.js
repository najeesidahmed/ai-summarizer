import { configureStore } from '@reduxjs/toolkit';

import { artcileApi } from './article';

export const store = configureStore({
    reducer: {
        [artcileApi.reducerPath]: artcileApi.reducer,
    },
    middleware: 
        (getDefaultMiddleware) => getDefaultMiddleware().concat()
});