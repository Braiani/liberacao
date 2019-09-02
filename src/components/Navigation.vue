<template>
    <span>
        <v-app-bar
                color="green darken-4"
                dark
                app
        >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>LiberaIF</v-toolbar-title>


    </v-app-bar>
    <v-navigation-drawer
            v-model="drawer"
            dark
            app
    >
    </v-navigation-drawer>
    </span>
</template>

<script>
    export default {
        props: {
            source: String,
        },
        data: () => ({
            drawer: null,
        }),
    }
</script>
