import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        ra: '',
        pdf: ''
    },
    getters: {
        getRa: state => {
            return state.ra;
        },
        getPdf: state => {
            return state.pdf;
        }
    },
    mutations: {
        setPdf (state, pdf) {
            state.pdf = 'data:application/pdf;base64,' + pdf;
        },
        updateRa (state, ra) {
            state.ra = ra;
        }
    },
    actions: {
        getSigaPdf ({commit, getters}) {
            return new Promise ((resolve, reject) => {
                axios.get('http://localhost:8000/api/teste?ra=' + getters.getRa,{
                    headers: {
                        'Content-Type':'application/json'
                    }
                }).then((response) => {
                    commit('setPdf', response.data);
                    resolve();
                }).catch(() => {
                    reject('Estudante não encontrado. Verifique o RA digitado.');
                });
            });
        }
    }
})
