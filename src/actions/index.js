import { SET_ACTIVE_USER_ID, SET_TYPING_VALUE, SEND_MESSAGE, EDIT_MESSAGE, EDITING_MESSAGE } from "../constants/action-types";

export const setActiveUserId = id => ({
  type: SET_ACTIVE_USER_ID,
  payload: id
});

export const setTypingValue = input => ({
  type: SET_TYPING_VALUE,
  payload: input
});

export const editingNumber = editingMessage => ({
  type: EDITING_MESSAGE,
  payload: editingMessage
});

export const sendMessage = (message, userId) => ({
  type: SEND_MESSAGE,
  payload: {
    message,
    userId
  }
});

export const editMessage = (message, userId, number) => ({
  type: EDIT_MESSAGE,
  payload: {
    message,
    userId,
    number
  }
});