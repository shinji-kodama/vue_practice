<template>
    <p> '{{ name }}' は atomic designの階層 {{ lv.lv }} : {{ lv.name }} だよ</p>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";

export default {
    props: {
        name:{
            type: String,
            default: '',
        },
        lv: {
            type: Object,
            default: '',
        }
    },
    // data() {
    //     return {
    //         lv: {lv:"lv5",name:'Page'},
    //         name: "Page2"
    //     };
    // },
    // computed: {
    //     ...mapState([""]),
    //     ...mapGetters([""]),
        
    // },
    // methods: {
    //     ...mapMutations([""]),
    // },
};

</script>