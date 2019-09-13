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
        <v-container fluid>
            <h2>Hoje é <span>{{ day }}</span>! Agora são <span>{{ time.toLocaleTimeString() }}</span>!</h2>
        </v-container>
        <v-container fluid>
            <!--<iframe v-show="showHorario" :src="pdf" frameborder="0" width="100%" height="750px"></iframe>-->
            <horario v-show="showHorario" v-bind:url="pdf" :key="ra"></horario>
        </v-container>
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
                pdf: '',
                day: new Date(),
                time: new Date()
            }
        },
        mounted() {
            setInterval(() => {
                this.time = new Date()
            }, 1000);
            let options = { weekday: 'long' };
            this.day = new Date().toLocaleDateString('pt-BR', options).toUpperCase();
        },
        methods: {
            validate() {
                this.showHorario = false;
                this.$loading(true);
                axios.get('http://localhost:8000/api/teste?ra=' + this.ra,{
                    headers: {
                        'Content-Type':'application/json'
                    }
                }).then((response) => {
                    // this.pdf = response.data + '#page=3';
                    this.pdf = 'data:application/pdf;base64,' + response.data;
                    this.ra = '';
                    this.showHorario = true;
                    this.$loading(false);
                    /*this.$swal({
                        title: 'Eba!',
                        html:
                            '<iframe :src="this.pdf" frameborder="0" width="100%" height="100%"></iframe>',
                        showCloseButton: true,
                        showCancelButton: true,
                        focusConfirm: true,
                    });*/
                    // this.$swal.clickConfirm();
                }).catch(e => {
                    console.log('Error: ', e.response.data);
                    this.$loading(false);
                    this.ra = '';
                    this.$swal('Ops!', 'Não localizamos o estudante, verifique o RA do mesmo.', 'error');
                });
            }
        }
    };
</script>
<style scoped>
    span{
        background-color: yellow;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    }

</style>