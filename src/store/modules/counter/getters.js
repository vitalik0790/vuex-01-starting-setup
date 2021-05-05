export default {
    finalCounter(state) {
        return state.counter * 3;
    },
    normalizeCounter(_, getters) {
        const fanalCounter = getters.finalCounter;
        if (fanalCounter < 0) {
            return 0;
        } if (fanalCounter > 100) {
            return 100;
        }
        return fanalCounter;
    },
};