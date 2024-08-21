export const USER_SIGNIN = "USER_SIGNIN";

export const doLogin = (data: string) => {
    return {
        type: USER_SIGNIN,
        payload: data
    }
}