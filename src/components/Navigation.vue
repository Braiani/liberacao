<template>
    <v-app-bar
            color="green darken-4"
            dark
            app
    >

        <v-toolbar-title>{{title}}</v-toolbar-title>


    </v-app-bar>
</template>

<script>
    export default {
        props: {
            title: String,
        }
    }
</script>
