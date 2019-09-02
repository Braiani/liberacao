<template>
    <v-app>
        <v-container>
            <v-form @submit.prevent="validate">
                <v-text-field
                        v-model="ra"
                        label="Digite / Scaneie o RA do estudante"
                        required
                        autofocus
                ></v-text-field>
            </v-form>
        </v-container>
        <Horario v-show="showHorario" :key="ra" v-bind:matriculas="matriculas"></Horario>
    </v-app>
</template>

<script>
    import axios from 'axios';
    import Horario from '../components/Horario'

    export default {
        components:{
            Horario
        },
        data() {
            return {
                ra: '',
                showHorario: false,
                matriculas: ''
            }
        },
        methods: {
            validate() {
                this.$loading(true);
                axios.get('http://localhost:8000/api/teste?ra=' + this.ra).then((response) => {
                    this.matriculas = response.data;
                    this.ra = '';
                    this.showHorario = true;
                    this.$loading(false);
                });
            }
        }
    };
</script>
