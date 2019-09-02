<template>
    <v-app>
        <v-content>
            <navigation></navigation>
            <v-container>
                <router-view></router-view>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
    import Navigation from './components/Navigation'

    export default {
        components: {
            Navigation
        },
        name: 'App'
    };
</script>
