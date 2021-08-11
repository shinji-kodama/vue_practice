<template>
  <div class="profile_input_area input-field">
    <h5> {{ formTitle }} </h5>
    <p>{{ subTitle1  }}</p>
    <input type="text" placeholder="名前" v-model="subTitleValue1"/>
    <p>{{ subTitle2 }}</p>
    <textarea type="text" placeholder="紹介文" v-model="subTitleValue2"/>
    <div>
      <button @click="addAction" class="btn waves-effect waves-light" >送信</button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "CreateCard",
  props:{
    formTitle : {
      type : String,
      default : "",
    },
    subTitle1 : {
      type : String,
      default : "",
    },
    subTitle2 : {
      type : String,
      default : "",
    },
  },
  data(){
    return{
        subTitleValue1 : "",
        subTitleValue2 : "",
    };
  },
  methods: {
    ...mapMutations(["addProfiles"]),
    addAction(){
      this.addProfiles({subTitleValue1 : this.subTitleValue1, subTitleValue2 : this.subTitleValue2})
      this.subTitleValue1 = ""
      this.subTitleValue2 = ""
    }
  }
}
</script>

<style scoped>
.profile_input_area{
  max-width: 60%;
  margin: 0 auto;
  border: 1px solid rgba(215, 213, 213, 0.964);
  margin-top: 10px;
  padding: 3%;
}
button{
  display: block;
  margin: 20px auto 0;
}
textarea{
  height: 120px;
}



</style>
