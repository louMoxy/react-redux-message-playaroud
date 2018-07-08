import { SET_TYPING_VALUE, SEND_MESSAGE, EDITING_MESSAGE, EDIT_MESSAGE} from "../constants/action-types";

export default function activeUserId(state = "", action) {
    switch (action.type) {
        case SET_TYPING_VALUE:
            return action.payload;
        case EDITING_MESSAGE:
            return action.payload;
        case SEND_MESSAGE:
        case EDIT_MESSAGE:
            return "";
        default:
            return state;
    }
}