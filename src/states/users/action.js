import { hideLoading, showLoading } from 'react-redux-loading-bar'
import api from '../../utils/api'

/**
 * @TODO: Define all the actions (creator) for the users state
 */
const ActionType = {
  RECEIVE_USERS: 'RECEIVE_USERS',
  REGISTER_ERROR: 'REGISTER_ERROR',
  REGISTER_SUCCESS: 'REGISTER_SUCCESS',
  UNSET_USERS: 'UNSET_USERS'
}

function receiveUsersActionCreator (users) {
  return {
    type: ActionType.RECEIVE_USERS,
    payload: {
      users
    }
  }
}

function registerErrorActionCreator (error) {
  return {
    type: ActionType.REGISTER_ERROR,
    payload: {
      error
    }
  }
}

function registerSuccessActionCreator (success) {
  return {
    type: ActionType.REGISTER_SUCCESS,
    payload: {
      success
    }
  }
}

function unsetUsersActionCreator () {
  return {
    type: ActionType.UNSET_USERS,
    payload: {
      users: null
    }
  }
}

function asyncRegisterUser ({ id, name, password }) {
  return async (dispatch) => {
    dispatch(showLoading())
    try {
      await api.register({ id, name, password })
      dispatch(registerSuccessActionCreator('success'))
    } catch (error) {
      alert(error.message)
      dispatch(registerErrorActionCreator(error.message))
    }
    dispatch(hideLoading())
  }
}

function unsetUser () {
  return (dispatch) => {
    dispatch(unsetUsersActionCreator())
  }
}

export {
  ActionType,
  receiveUsersActionCreator,
  asyncRegisterUser,
  unsetUser
}
