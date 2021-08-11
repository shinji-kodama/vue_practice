<template>
<div>
    <p>{{ lv_m[1] }}</p>
    <Atom />
    <Atom />
    <Atom />
    
</div>
</template>

<script>

import Atom from '../atoms/Atom.vue';

export default {
    components:{
        Atom
    },
    props:{
        lv_m:{
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