<template>
<div>
    <button>aaaa</button>
</div>
</template>

<script>

export default {
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

<style scoped>
    button{
        width: 40px;
        height:20px;
        background-color:gray;
        border: 1px solid black;
    }
</style>