import _ from 'lodash';

import { getMessages } from "../static-data";
import { SEND_MESSAGE, EDITING_MESSAGE, EDIT_MESSAGE } from "../constants/action-types";

export default (state = getMessages(10), action) => {
    switch(action.type){
        case SEND_MESSAGE: {
            const { message, userId } = action.payload;
            const userMessages = state[userId];
            const number = +_.keys(userMessages).pop() +1;
            return {
                ...state,
                [userId]: {
                  ...userMessages,
                  [number]: {
                    number,
                    text: message,
                    is_user_msg: true
                  }
                }
              };
            }
        case EDIT_MESSAGE: {
            const { message, userId, number } = action.payload;
            const userMessages = state[userId];
            return {
                ...state,
                [userId]: {
                    ...userMessages,
                    [number]: {
                      number,
                      text: message.concat(' (edited)'),
                      is_user_msg: true
                    }
                  }
            }
        }
        case EDITING_MESSAGE:
              return {
                  ...state, 
                  editingMessage: action.payload
              }
        default:
            return state;
    }
};