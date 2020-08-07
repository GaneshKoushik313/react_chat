import { SIDE_BAR } from './sidebarTypes'

const initialState = {
  showContact: false
}

const sidebarReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIDE_BAR: return {
      ...state,
      showContact: state.showContact = !state.showContact
    }
    default: return state
  }
}

export default sidebarReducer