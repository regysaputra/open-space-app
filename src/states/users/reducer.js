/**
 * @TODO: Define reducer for the users state
 */

import { ActionType } from './action'

function usersReducer (users = [], action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_USERS:
      return action.payload.users
    case ActionType.REGISTER_SUCCESS:
      return action.payload.success
    case ActionType.REGISTER_ERROR:
      return action.payload.error
    case ActionType.UNSET_USERS:
      return null
    default:
      return users
  }
}

export default usersReducer
