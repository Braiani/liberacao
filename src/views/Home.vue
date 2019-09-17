<template>
    <v-app>
        <v-container>
            <v-form @submit.prevent="submitForm">
                <v-text-field
                        v-model="ra"
                        label="Digite / Scaneie o RA do estudante"
                        required
                        autofocus
                ></v-text-field>
            </v-form>
        </v-container>
        <v-container fluid>
            <h2>Hoje é <span>{{ day.toLocaleDateString('pt-BR', {weekday: 'long'}).toUpperCase() }}</span>! Agora são
                <span>{{ time.toLocaleTimeString() }}</span>!</h2>
        </v-container>
        <v-container fluid>
            <horario v-if="showHorario" v-bind:url="pdf"></horario>
        </v-container>
    </v-app>
</template>

<script>
    import Horario from '../components/Horario'
    import {mapActions, mapState} from 'vuex'

    export default {
        components: {
            Horario
        },
        data() {
            return {
                showHorario: false,
                day: new Date(),
                time: new Date(),
            }
        },
        mounted() {
            setInterval(() => {
                this.time = new Date();
                this.day = new Date();
            }, 1000);
        },
        computed: {
            ...mapState(['pdf']),
            ra: {
                get() {
                    return this.$store.state.ra;
                },
                set(value) {
                    this.$store.commit('updateRa', value);
                }
            }
        },
        methods: {
            ...mapActions(['getSigaPdf']),
            submitForm() {
                if (this.ra === '') {
                    this.$swal('Ops!', 'Campo RA não pode estar vazio', 'error');
                    return;
                }
                this.showHorario = false;
                this.$loading(true);
                var ra = this.ra;
                this.getSigaPdf(ra).then(() =>{
                    this.showHorario = true;
                    this.$loading(false);
                }).catch((error) => {
                    this.showHorario = false;
                    this.$loading(false);
                    this.$swal('Ops!', error, 'error');
                })
            }
        }
    };
</script>
<style scoped>
    span {
        background-color: yellow;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    }

</style>