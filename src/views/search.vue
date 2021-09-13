<template>
    <div id="app">
        <p>
            This is the search Page
        </p>
        <div>
            <label for="hackerSearchInput">
                Below is a search input that will query the Hacker News website.
                By default, it will prioritize by relevance, but you may prioritize
                by date instead by selecting that options in the dropdown to the right.
            </label>
            <br/>
            <input
                id="hackerSearchInput"
                type="text"
                v-model="searchString"
                placeholder="Search Here" />
            <button
                class="search-button"
                @click="submitSearch"
                @keydown.enter.stop.prevent="submitSearch"
                @keydown.space.stop.prevent="submitSearch">
                Search
            </button>
            <label for="selectPriority">
                Priority Selection:
            </label>
            <select
                v-model="searchPriority"
                id="selectPriority"
                class="priority-selection">
                <option>Relevance</option>
                <option>Date</option>
            </select>
        </div>
    <div v-if="searchResults.length > 0">
        <table>
            <thead>
                <th v-if="!isDatePriority">Title</th>
                <th>Author</th>
                <th>Created Date</th>
                <th v-if="!isDatePriority">Link</th>
            </thead>
            <tbody>
                <tr
                    class="test"
                    v-for="(hit, index) in searchResults"
                    :key="index">
                    <td v-if="!isDatePriority">{{ hit.title }}</td>
                    <td>{{ hit.author }}</td>
                    <td>{{ hit.created_at }}</td>
                    <td v-if="!isDatePriority">
                        <a :href="hit.url">link</a>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
        <p>
            Or you can navigate to the
            <router-link to="history"> History Page </router-link>
            to see your previous searches
        </p>
        <p>
            Lost?  Feel free to return to the
            <router-link to="/"> Landing Page </router-link>
        </p>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
    name: 'Search',
    data() {
        return{
            searchString: '',
            searchPriority: 'Relevance',
            priority: ''
        };
    },
    computed: {
        ...mapState({
            searchHistory: state => state.searchHistory,
            searchResults: state => state.searchResults,
            previousPriority: state => state.previousPriority
        }),
        isDatePriority() {
            return this.previousPriority === 'Date';
        }
    },
    methods: {
        ...mapActions(['SEARCH_HACKER_NEWS']),
        setPriority() {
            this.priority = this.searchPriority;
        },
        submitSearch() {
            this.setPriority();
            this.SEARCH_HACKER_NEWS({searchString: this.searchString, priority: this.priority});
        }
    }
}
</script>

<style lang="scss" scoped>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    width: 50vw;
    margin: 60px auto;

    .priority-selection {
        margin-top: 35px;
    }

    .search-button {
        margin-right: 25px;
    }

    table {
        margin: 0 auto;
    }
}
</style>
