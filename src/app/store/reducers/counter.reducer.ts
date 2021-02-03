import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from '../actions/counter.actions';
 
export const initialState = {
    name: 'Incre', count: 1
};
 
const _counterReducer = createReducer(
  initialState,
  on(increment, (state) => {
      return {
          ...state,
          count: state.count+1
      }
  }),
  on(decrement, (state) => {
      return {
          ...state,
          count: state.count-1
      }
  }),
  on(reset, (state) => {
      return {
          ...state,
          count: 0
      }
  })
);
 
export function counterReducer(state: any, action: any) {
  return _counterReducer(state, action);
}