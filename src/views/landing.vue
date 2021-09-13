<template>
    <div id="app">
        <div v-if="this.$route.name === 'Landing'">
            Landing page
            <p>
                From here you can navigate to either the
                <router-link to="search"> Search Page </router-link>
                in order to search using the Hacker News API or to the
                <router-link to="history"> History Page </router-link>
                which will list your previous searches
            </p>
        </div>
        <div v-if="this.$route.name !== 'Landing'">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Landing',
    mounted() {
        console.log(this.$route.name);
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin: 60px auto;
    width: 50vw;
}
</style>
