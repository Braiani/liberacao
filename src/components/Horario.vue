<template>
    <v-container>
        <v-list rounded>
            <v-subheader>Matrículas encontradas</v-subheader>
            <v-list-item-group v-model="matriculaLists" color="primary">
                <v-list-item @click="teste(item)" v-for="(item, index) in matriculaLists" :key="index">
                    <v-list-item-content>
                        <v-list-item-title v-text="item"></v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </v-container>
</template>

<script>
    export default {
        name: "Horario",
        props: ['matriculas'],
        data(){
            return {
                matriculaLists: this.matriculas
            }
        },
        methods: {
            teste: (matricula) => {
                alert(matricula);
            }
        }
    }
</script>

<style scoped>

</style>