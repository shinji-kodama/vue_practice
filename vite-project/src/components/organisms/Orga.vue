<template>
<div>
    <p>{{ lv.name }} : {{ lv.lv }} , {{ lv_origin[3] }}</p>
    <Template class='temp' :lv_t=lv_origin />
</div>
</template>

<script>

import Template from '../templates/Template.vue';

export default {
    components: {
        Template
    },
    props:{
        lv:{
            type:String,
            default:''
        },
        lv_origin:{
            type:Object,
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
.temp{
    width:100%;   
    height:400px;
    background-color:rgba(0,0,0,0.2);
    /* border: 1px solid black; */
}
</style>