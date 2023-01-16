
import axios from "axios"
import { path } from "../../../../CONSTANTS"
export const actions = {
    submit: async ({ commit, getters }, payload) => {
        const response = await axios.post(path, payload)
        console.log(response)
        commit('ON_SUBMIT', payload)
    }
}