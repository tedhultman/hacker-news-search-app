export default {
    ['COLLECT_SEARCH_RESULTS'](state, payload) {
        state.searchResults = payload;
    },
    ['ADD_TO_SEARCH_HISTORY'](state, payload) {
        state.searchHistory.push(payload);
    },
    ['SET_PREVIOUS_PRIORITY'](state, payload) {
        state.previousPriority = payload;
    }
}