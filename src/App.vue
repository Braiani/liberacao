<template>
    <v-app>
        <navigation></navigation>
        <v-content transition="slide-x-transition">
            <router-view></router-view>
        </v-content>
    </v-app>
</template>

<script>
    import Navigation from './components/Navigation'

    export default {
        components: {
            Navigation
        },
        name: 'App',
        data: () => ({
            //
        }),
    };
</script>
