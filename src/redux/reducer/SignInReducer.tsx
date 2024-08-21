import { USER_SIGNIN } from "../action/SignInAction";

const INITAL_SIGNIN = {
    account: {
        token: ''
    },
    isAuthenticated: false
};

type data = {
    type: string,
    payload: { data: string }
}

const SignInReducer = (state = INITAL_SIGNIN, action: data) => {
    switch (action.type) {
        case USER_SIGNIN:
            return {
                ...state,
                account: {
                    token: action.payload.data
                },
                isAuthenticated: true
            }
    }
}

export default SignInReducer