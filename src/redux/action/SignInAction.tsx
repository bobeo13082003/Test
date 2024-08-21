export const USER_SIGNIN = "USER_SIGNIN";

export const doLogin = (token: string, refreshToken: string) => {
    return {
        type: USER_SIGNIN,
        payload: { token, refreshToken }
    }
}