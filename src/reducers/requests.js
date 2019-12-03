const initialState = {
  actualProfile: {hasAddress: false},
  actualOrder: null,
}

const requests = (state = initialState, action) => {
  switch (action.type) {
    case "SET_ORDERS":
      return { ...state, allOrders: action.payload.orders }
    case "SET_PROFILE":
      return { ...state, actualProfile: action.payload.profile }
    case "SET_ADDRESS":
      return { ...state, actualAddress: action.payload.address }
    case "SET_ACTIVE_ORDER":
      return { ...state, actualOrder: action.payload.activeOrder }
    default:
      return state
  }
}

export default requests
