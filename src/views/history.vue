<template>
    <div id="app">
        <h1>
            History page
        </h1>
        <p>
            Here you see your previous search terms, where
            the first term you searched is on the top and your
            most recent search will be on the bottom.
        </p>

        <table class="centered">
            <thead>
                <th>Previous search terms listed below</th>
            </thead>
            <tbody>
                <tr
                    v-for="(searchTerm, index) in searchHistory"
                    :key="index">
                    <td>{{ searchTerm }}</td>
                </tr>
            </tbody>
        </table>
        <p>
            Want to search again?  Head back over to the
            <router-link to="search"> Search Page </router-link>
        </p>
        <p>
            Lost?  Feel free to return to the
            <router-link to="/"> Landing Page </router-link>
        </p>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'History',
    computed: {
        ...mapState({
            searchHistory: state => state.searchHistory
        })
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
    width: 50vw;
    margin: 60px auto;

    table.centered {
        margin: auto;
        border-collapse: collapse;

        thead {
            th {
                border: 1px solid black;
                
                padding: 5px;
            }
        }

        tbody {
            td {
                border: 1px solid black;
                padding: 5px;
            }
        }
    }
}
</style>
