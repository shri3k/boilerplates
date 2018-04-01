import { ADD_TODO } from '../actions';

const initState = {
  currentVal: '',
  lists: [],
};

export default function (state = initState, action) {
  switch (action.type) {
    case ADD_TODO: {
      return {
        ...state,
        lists: [...state.lists, action.data],
      };
    }
    default: {
      return state;
    }
  }
}
