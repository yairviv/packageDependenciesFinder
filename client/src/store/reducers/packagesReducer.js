import { GET_PACKAGES_BY_NAME } from '../actions/constants'

const packagesReducer = (state = [], { type, payload }) => {
  switch (type) {
    case GET_PACKAGES_BY_NAME:
      return payload
    default:
      return state
  }
}

export default packagesReducer;
