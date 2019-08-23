<template>

</template>

<script>
    export default {
        data: () => {
            return {
                estudante: '',
                valid: ''
            }
        },
        methods: {
            validate: function (e) {
                this.$loading(true);
                setTimeout(() => {
                    this.valid = "Felipe Braiani";
                    this.estudante = '';
                    this.$loading(false);
                }, 4000);
                e.preventDefault();
            }
        }
    };
</script>
