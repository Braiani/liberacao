<template>
    <div>
        <div class="row">
            <div class="col-sm-3">
                <v-btn
                        rounded
                        block
                        color="green"
                        class="white--text"
                        v-show="showPrev" @click="prevPage()">
                    <v-icon right dark>mdi-chevron-left</v-icon>
                    Anterior
                </v-btn>
            </div>
            <div class="col-sm-3 offset-6">
                <v-btn
                        rounded
                        block
                        color="green"
                        class="white--text"
                        v-show="showNext" @click="nextPage()">
                    Próximo
                    <v-icon right dark>mdi-chevron-right</v-icon>
                </v-btn>
            </div>
            <div class="row">
                <div class="col-sm-12">
                    <pdf :src="url" @num-pages="pageCount = $event" @loaded="loaded()"
                         :page="page" class="pdf"></pdf>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import pdf from 'vue-pdf'

    export default {
        name: "Horario",
        props: ['url'],
        data() {
            return {
                pageCount: 0,
                page: 0,
                showNext: false,
                showPrev: false,
            }
        },
        components: {
            pdf
        },
        methods: {
            loaded: function () {
                if (this.pageCount > 3) {
                    this.page = 3;
                    this.showNext = true;
                } else {
                    this.page = this.pageCount;
                    this.showNext = false;
                    this.showPrev = false;
                }
            },
            nextPage: function () {
                this.showNext = false;
                this.showPrev = true;
                this.page++;
            },
            prevPage: function () {
                this.showPrev = false;
                this.showNext = true;
                this.page--;
            }
        }
    }
</script>

<style scoped>
    .pdf {
        height: 100%;
        width: 100%;
    }
</style>
