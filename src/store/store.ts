import { configureStore } from "@reduxjs/toolkit";

import todosReducer from "./features/todoSlice";

export const store = configureStore({
  reducer: { todos: todosReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// export const useAppSelector: TypedUseSelectorHook<
//   ReturnType<typeof store.getState>
// > = useSelector;
// export const useAppDispatch: () => typeof store.dispatch = useDispatch;
