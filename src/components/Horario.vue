<template>
    <v-container fluid>
        <p>{{pageCount}}</p>
        <pdf :src="url" @num-pages="pageCount = $event" class="pdf"></pdf>
        <!--<button class="btn-add-new"></button>-->
    </v-container>
</template>

<script>
    import pdf from 'vue-pdf'
    export default {
        name: "Horario",
        props: ['url'],
        data() {
            return {
                pageCount: 0
            }
        },
        components:{
            pdf
        }
    }
</script>

<style scoped>
    .pdf{
        height: 100%;
        width: 100%;
    }
</style>
