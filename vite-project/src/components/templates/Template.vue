<template>
<div>
    <p>{{ lv_t[2] }}</p>
    <div class='flex'>
        <Mole :lv_m=lv_t class='mole'/>
        <Mole :lv_m=lv_t class='mole'/>
        <Mole :lv_m=lv_t class='mole'/>
    </div>
</div>
</template>

<script>

import Mole from '../molecules/Mole.vue';
export default {
    components: {
        Mole
    },
    props:{
        lv_t:{
            type:String,
            default:''
        },
        name: {
            type:String,
            default:''
        }
    },
    data() {
        return {
            lv: {lv:"lv4",name:'Organism'},
            name: "Orga"
        };
    },
};

</script>


<style scoped>
.flex{
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    
    text-align: center;
}
.mole{
    width:20%;   
    height:200px;
    background-color:rgba(255,0,0,0.2);
    /* border: 1px solid black; */
}
</style>