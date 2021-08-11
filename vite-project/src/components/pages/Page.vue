<template>
    <p> '{{ name }}' は atomic designの階層 {{ lv[4].lv }} : {{ lv[4].name }} だよ</p>
    <div class='flex'>
        <Orga class='organism' :lv=lv[3] :lv_origin=lv />
        <Orga2 class='organism' />
    </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";
import Orga from '../organisms/Orga.vue';
import Orga2 from '../organisms/Orga2.vue';

export default {
      components: {
        Orga,
        Orga2,
      },
    data() {
        return {
            lv: [
                {lv:"lv1",name:'Atom'},
                {lv:"lv2",name:'Molecule'},
                {lv:"lv3",name:'Template'},
                {lv:"lv4",name:'Organism'},
                {lv:"lv5",name:'Page'}
            ],
            name: "Page",

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

<style scoped>
.flex{
    margin: 0 auto;
    display: flex;
    justify-content:center;
    
    text-align: center;
}
.organism{
    width:600px;   
    height:600px;
    border: 1px solid black;
}
</style>