import { USER_SIGNIN } from "../action/SignInAction";

const INITAL_SIGNIN = {
    account: {
        token: '',
        refreshToken: ''
    },
    isAuthenticated: false
};

type data = {
    type: string,
    payload: { token: string, refreshToken: string }
}

const SignInReducer = (state = INITAL_SIGNIN, action: data) => {
    switch (action.type) {
        case USER_SIGNIN:
            return {
                ...state,
                account: {
                    token: action.payload.token,
                    refreshToken: action.payload.refreshToken
                },
                isAuthenticated: true
            }
        default:
            return state;
    }
}

export default SignInReducer