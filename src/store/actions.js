import HackerSearchService from "@services/index.js";

export default {
    ['SEARCH_HACKER_NEWS']: ({commit}, payload) => {
        const { searchString, priority } = payload;
        commit('SET_PREVIOUS_PRIORITY', priority);
        HackerSearchService.commenceSearch(searchString, priority).then(result => {
            if (result.data.hits.length > 0) {
                commit('COLLECT_SEARCH_RESULTS', result.data.hits)
            }
        }).catch(e => {
            console.error(e);
            commit('COLLECT_SEARCH_RESULTS', []);
        }).finally(() => {
            commit('ADD_TO_SEARCH_HISTORY', searchString);
        });
    }
}