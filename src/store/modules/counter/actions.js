export default {
    increment(context) {
        setTimeout(() => {
            context.commit('increment')
            // console.log(context)
        }, 2000);
    },
    increase(context, payload) {
        // console.log(context)
        context.commit('increase', payload)
    },
};