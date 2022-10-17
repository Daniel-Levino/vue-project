import * as types from "./mutationTypes";

export default {
    [types.NAME_FOR_CONST](state, payload) {
        state.nameOfState = payload;
    }
}
