
export default function(state = null, action) {
  switch (action.type) {
    case 'SELECTED_BOOK':
      return action.payload;
  }

  return state;
}
