export const mutations = {
    ON_INIT(state, payload) {
        state.userName = payload.userName
    },
    ON_SUBMIT(state, payload) {
        console.log(state,payload)
        state.userName = payload.userName
        state.password = payload.password
    }
}