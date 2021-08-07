<template>
    <h1>{{ ahaha }}</h1>
    <p>{{ inTxt }}</p>
    <input type="text" v-model="inTxt" />
    <button v-on:click="changeAA">test</button>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
    data() {
        return {
            inTxt: "",
        };
    },
    computed: {
        ...mapState(["ahaha"]),
        
    },
    methods: {
        ...mapMutations(["changeAhaha"]),
        changeAA(){
            this.changeAhaha(this.inTxt);
            console.log('a')
        }
    },
};

</script>
